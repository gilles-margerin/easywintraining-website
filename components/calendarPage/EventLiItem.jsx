import AdminBtn from "./AdminBtn";
import EventHeader from "./EventHeader";
import EventIcon from "./EventIcon";
import iconsData from "../../data/iconsData";

const EventLiItem = ({
  event,
  session,
  styles,
  currentUser,
  handleDelete,
  handleEdit,
  editMode,
}) => {
  return (
    <li
      className={styles.liItem}
      id={event._id}
      key={event.name}
      style={{
        border: `1px outset ${event.color}`,
      }}
    >
      <span className={styles.eventType}>{event.type}</span>
      {session && currentUser?.isAdmin && (
        <div id="adminWrapper" className={styles.adminWrapper}>
          {editMode.isEdit && event._id === editMode.event._id ? (
            <AdminBtn
              id={`editBtn${event._id}`}
              styles={styles}
              event={event}
              handleClick={handleEdit}
              text="Edition"
            />
          ) : editMode.isEdit && event._id !== editMode.event._id ? null : (
            <AdminBtn
              id={`editBtn${event._id}`}
              styles={styles}
              event={event}
              handleClick={handleEdit}
              text="Editer"
            />
          )}
          <AdminBtn
            id={`deleteBtn${event._id}`}
            styles={styles}
            event={event}
            handleClick={handleDelete}
            text="Effacer"
          />
        </div>
      )}
      <EventHeader styles={styles} event={event} />
      {iconsData.map((icon, i) => {
        const eventType = icon.alt.slice(0, -5);
        const eventFilter = Object.fromEntries(
          Object.entries(event).filter((key) => key[0] === eventType)
        );

        return (
          <EventIcon
            key={i}
            index={i}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            content={eventFilter[eventType]}
            styles={styles}
          />
        );
      })}
    </li>
  );
};

export default EventLiItem;
