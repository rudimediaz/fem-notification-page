<script>
import NotificationCard from "./NotificationCard.svelte";
import { useNotificationStore } from "./notifications";

const {
  unread,
  setAllRead,
  setRead,
  items: notificationItems,
} = useNotificationStore();

$: isAnyUnread = $unread > 0;

/**
 * @param {MouseEvent} ev
 */
function handleAllRead(ev) {
  ev.preventDefault();
  setAllRead();
}

/**
 *
 * @param {CustomEvent<{id : string}>} ev
 */
function handleCardClick(ev) {
  setRead(ev.detail.id);
}
</script>

<div class={`${$$props.class} root`}>
  <div class="heading">
    <span class="title">Notifications</span>
    <div class="badge" data-is-any-unread={isAnyUnread}>
      {$unread}
    </div>
    <a href="#!" class="action" on:click={handleAllRead}
      >Mark all as read</a
    >
  </div>
  <div class="body">
    {#each $notificationItems as notificationItem}
      <NotificationCard
        id={notificationItem.id}
        avatar={notificationItem.avatar}
        message={notificationItem.message}
        subject={notificationItem.subject}
        isMedia={notificationItem.isMedia}
        occured={notificationItem.occured}
        notificationFrom={notificationItem.from}
        content={notificationItem.content}
        isRead={notificationItem.read}
        on:subjectclick={handleCardClick}
      />
    {/each}
  </div>
</div>

<style>
.root {
  color: var(--clr-n-5);
  background-color: #fff;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0px 2px 5px 1px hsl(var(--clr-n-5) / 0.7),
    0px 4px 8px 2px hsl(var(--clr-n-5) / 0.6),
    0px 8px 10px 4px hsl(var(--clr-n-5) / 0.5);
}

@media (max-width: 25em) {
  .root {
    font-size: clamp(0.875rem, 0.5rem + 0.42vw, 1rem);
  }
}

.heading {
  display: flex;
  align-items: center;
}

.title,
.badge {
  font-weight: 800;
}

.title {
  color: var(--clr-n-6);
  font-size: 1.5rem;
}
@media (max-width: 25em) {
  .title {
    font-size: clamp(1.25rem, 1.25rem + 0.8333333333333334vw, 1.5rem);
  }
}
.badge {
  background-color: var(--clr-blue);
  color: #fff;
  padding: 0.25rem 0.75em;
  border-radius: 0.5rem;
  margin-inline-start: 1rem;
  margin-inline-end: auto;
}

.badge[data-is-any-unread="false"] {
  visibility: collapse;
}

.action,
.action:visited {
  color: inherit;
}

.action {
  text-decoration: none;
}

@media (hover: hover) {
  .action:hover {
    color: var(--clr-blue);
  }
}

.body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
