import React from "react";

// icons
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { BiSend } from "react-icons/bi";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

// components
import CheckBox from "../templates/checkbox";

export default function Contact() {
  let contactList = [
    {
      id: 1,
      icon: <HiOutlineChatBubbleLeftRight size="30" />,
      header: "Chat to me",
      body: "I am here to help",
      code: "waizawtun142002@gmail.com",
    },
    {
      id: 2,
      icon: <MdOutlineLocationOn size="30" />,
      header: "Visit me",
      body: "Say hello to me.",
      code: "1397, Shinsawpu Quarter, Bago, Myanmar",
    },
    {
      id: 3,
      icon: <CgPhone size="30" />,
      header: "Call me",
      body: "Monday ~ Friday from 8 A.M. to 5 P.M.",
      code: "+959-760-893-129",
    },
  ];
  let checklists = [
    {
      id: "checkList1",
      name: "Full-stack Web Development",
    },
    { id: "checklist2", name: "Frontend Development" },
    { id: "checklist3", name: "Backend Development" },
    { id: "checklist4", name: "Maintenance" },
    { id: "checklist5", name: "Service Upgrade" },
  ];
  return (
    <div className="contact">
      <div className="contact-list">
        {contactList.map((contact) => (
          <div className="contact-list-item" key={contact.id}>
            <div className="icon">{contact.icon}</div>
            <div className="description">
              <p className="header">{contact.header}</p>
              <p className="body">{contact.body}</p>
              <code>{contact.code}</code>
            </div>
          </div>
        ))}
        <div className="contact-list-icons">
          Find me here -
          <div className="icon">
            <FaFacebookF size="30" />
          </div>
          <div className="icon">
            <FaInstagram size="30" />
          </div>
          <div className="icon">
            <FaGithub size="30" />
          </div>
        </div>
      </div>
      <div className="submit-form">
        <div className="header">
          Got ideas? I think I can do it. Let's team up.
        </div>
        <div className="body">
          Tell me more about yourself and what you've got in mind.
        </div>
        <div className="form">
          <div className="inputbox">
            <input type="text" required />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input type="email" required />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputbox text-area">
            <input type="text" required />
            <span>Tell me a little about the project...</span>
            <i></i>
          </div>
          <div className="checklist-container">
            {checklists.map((checklist) => (
              <div className="checklist" key={checklist.id}>
                <CheckBox label={checklist.name} target={checklist.id} />
              </div>
            ))}
          </div>
          <div className="submit-btn">
            <button className="button" type="button">
              <span className="button__text">Send</span>
              <span className="button__icon">
                <BiSend size="20" fill="white" color="white" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
