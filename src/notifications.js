import { derived, writable } from "svelte/store";

/**
 * @typedef {Object} UserNotification
 * @property {string} id
 * @property {string} from
 * @property {string} avatar
 * @property {string=} subject
 * @property {string} message
 * @property {boolean} isMedia
 * @property {string=} content
 * @property {boolean} read
 * @property {string} occured
 */

/** @type {Array<UserNotification>} */
const notifications = [
  {
    id: "fdb21fb099c46ede",
    from: "Mark Webber",
    avatar: "/avatar-mark-webber.webp",
    subject: "My first tournament today!",
    message: "reacted to your recent post",
    isMedia: false,
    read: false,
    occured: "1m ago",
  },
  {
    id: "94bd23cacb9db5c2",
    from: "Angela Gray",
    avatar: "/avatar-angela-gray.webp",
    message: "followed you",
    isMedia: false,
    read: false,
    occured: "5m ago",
  },
  {
    id: "0431792fb45e203f",
    from: "Jacob Thompson",
    avatar: "/avatar-jacob-thompson.webp",
    subject: "Chess Club",
    message: "has joined your group",
    isMedia: false,
    read: false,
    occured: "1 day ago",
  },
  {
    id: "344085413008fab7",
    from: "Rizky Hasanuddin",
    avatar: "/avatar-rizky-hasanuddin.webp",
    message: "sent you a private message",
    content:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isMedia: false,
    read: true,
    occured: "5 days ago",
  },
  {
    id: "aac40c685307074a",
    from: "Kimberly Smith",
    avatar: "/avatar-kimberly-smith.webp",
    message: "commented on your picture",
    subject: "/image-chess.webp",
    isMedia: true,
    read: true,
    occured: "1 week ago",
  },
  {
    id: "6be26b92146532fd",
    from: "Nathan Peterson",
    avatar: "/avatar-nathan-peterson.webp",
    subject: "5 end-game strategies to increase your win rate",
    message: "reacted to your recent post",
    isMedia: false,
    read: true,
    occured: "2 weeks ago",
  },
  {
    id: "3256cea038f383bf",
    from: "Anna Kim",
    avatar: "/avatar-anna-kim.webp",
    subject: "Chess Club",
    message: "left the group",
    isMedia: false,
    read: true,
    occured: "2 weeks ago",
  },
];

export function useNotificationStore() {
  const _items = writable(notifications);
  const unread = derived(_items, (val) => {
    return val.filter((v) => v.read === false).length;
  });
  const items = derived(_items, (v) => v);
  /**
   *
   * @param {string} id
   *
   */
  function setRead(id, read = true) {
    _items.update((items) => {
      return items.reduce((a, c) => {
        if (c.id === id) {
          const updated = { ...c, read };
          return [...a, updated];
        }

        return [...a, c];
      }, []);
    });
  }

  function setAllRead() {
    _items.update((its) => {
      return its.map((it) => ({ ...it, read: true }));
    });
  }

  return /**@type {const} */ ({ setRead, unread, items, setAllRead });
}
