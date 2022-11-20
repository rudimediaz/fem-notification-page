<script>
import { createEventDispatcher } from "svelte";

/** @type {string}*/
export let id;
/** @type {string}*/
export let avatar;
/** @type {string}*/
export let message;
/** @type {string}*/
export let subject = "";
/** @type {boolean}*/
export let isMedia;
/** @type {string} */
export let occured;
/** @type {string} */
export let notificationFrom;
/** @type {string | undefined} */
export let content;
/** @type {boolean}*/
export let isRead;

const dispatch = createEventDispatcher();

/**
 * @param {Event} e
 */
function handleSubjectClick(e) {
  e.stopImmediatePropagation();
  dispatch("subjectclick", { id });
}
</script>

<div class="root" data-is-read={isRead}>
  <div class="avatar">
    <img src={avatar} alt="avatar" />
  </div>
  <div data-subject-media={isMedia} class="copy">
    <a href="#!" on:click={handleSubjectClick} class="sender"
      >{notificationFrom}&nbsp;</a
    >
    <span>{message}&nbsp;</span>
    {#if subject && isMedia === false}
      <a href="#!" class="subject" on:click={handleSubjectClick}
        >{subject}</a
      >
    {/if}
    {#if !isRead}
      <span class="unread-point" />
    {/if}
  </div>

  <div class="occurance">{occured}</div>
  {#if content}
    <div class="content">
      <p>
        {content}
      </p>
    </div>
  {/if}
  {#if isMedia === true}
    <div class="subject-media">
      <img src={subject} alt={message} />
    </div>
  {/if}
</div>

<style>
/*
  use :where to prevent specify issue 
*/
:where(a, a:visited) {
  text-decoration: none;
  color: inherit;
}

.root {
  display: grid;
  grid-template-columns: 5rem auto min-content;
  grid-template-rows: repeat(3, auto);
  padding-block: 1rem;
  border-radius: 0.75rem;
  padding-inline: 0.5rem;
  background-color: #fff;
}

.root[data-is-read="false"] {
  background-color: var(--clr-n-1);
}

/* @media (hover: hover) {
  .root[data-is-read="false"]:hover {
    cursor: pointer;
  }
} */

.sender,
.subject {
  font-weight: 800;
}

.sender {
  color: var(--clr-n-6);
}

.subject {
  color: var(--clr-n-5);
}

@media (hover: hover) {
  .subject:hover {
    color: var(--clr-blue);
  }
}

.avatar {
  grid-row: 1/ 3;
  display: grid;
  place-items: start center;
  padding-inline: 1rem;
}

.avatar img {
  object-fit: contain;
  object-position: center;
  height: 48px;
}

.occurance {
  grid-row-start: 2;
  grid-column: 2 /-1;
  color: var(--clr-n-4);
}

.content {
  grid-column: 2 / -1;
  grid-row-start: 3;
}

.content p {
  padding: 1em;
  border: 1pt solid var(--clr-n-3);
}

@media (hover: hover) {
  .content p:hover {
    background-color: var(--clr-n-3);
    cursor: pointer;
  }
}

.copy[data-subject-media="false"] {
  grid-column: 2/-1;
}

.subject-media {
  grid-column: -2/-1;
  grid-row: 1/3;
  display: grid;
  place-items: start end;
}

.subject-media img {
  object-fit: contain;
  object-position: center;
  height: 48px;
}

.unread-point {
  background-color: var(--clr-red);
  display: inline-block;
  border: 0.25rem solid var(--clr-red);
  border-radius: 50%;
}
</style>
