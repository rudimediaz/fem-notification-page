<script>
import NotificationList from "./NotificationList.svelte";
</script>

<div class="page-wrapper">
  <div class="container">
    <NotificationList class="notification-list" />
  </div>
</div>

<style>
.page-wrapper {
  overflow-x: hidden;
}

.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

:global(.notification-list) {
  max-width: 70vmin;
}

@media (max-width: 45em) {
  :global(.notification-list) {
    max-width: 100vw;
  }
}

/* :global(.container) {
  margin-inline: 2rem;
}

@media (max-width: 19.99em) {
  :global(.container) {
    margin-inline: clamp(0.5rem, 2vw, 0.75rem);
  }
}

@media (min-width: 20em) and (max-width: 29.99em) {
  :global(.container) {
    margin-inline: clamp(0.75rem, 3vw, 1rem);
  }
}

@media (min-width: 30em) and (max-width: 39.99em) {
  :global(.container) {
    margin-inline: clamp(1rem, 4vw, 2rem);
  }
}

@media (min-width: 40em) and (max-width: 54.99em) {
  :global(.container) {
    margin-inline: clamp(2rem, 6vw, 4rem);
  }
}

@media (min-width: 55em) and (max-width: 64.99em) {
  :global(.container) {
    margin-inline: clamp(4rem, 8vw, 6rem);
  }
}

@media (min-width: 65em) {
  :global(.container) {
    margin-inline: clamp(6rem, 10vw, 10.5rem);
  }
} */
</style>
