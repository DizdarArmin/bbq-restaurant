import useDocument from "hooks/useDocument";
import { useState, useEffect } from "react";
import iContact from "types/iContact";
export default function Contact() {
  const { data } = useDocument("contact", "contact");
  const [contact, setContact] = useState(Object);
  const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${data.address}`;

  useEffect(() => {
    setContact(data as iContact);
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="contact">
          {contact.email && (
            <div className="card">
              {/* Refactor into components -1 */}
              <label>
                <i className="fas fa-phone-square-alt"></i>
                <a href={`tel:${contact.number}`}>{contact.number}</a>
              </label>

              <label>
                <i className="fas fa-map-marker-alt"></i>
                <a rel="noreferrer" target="_blank" href={mapsQuery}>
                  {contact.address}
                </a>
              </label>

              <label>
                <i className="fas fa-envelope"></i>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
