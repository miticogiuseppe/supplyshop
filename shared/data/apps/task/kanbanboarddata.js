import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";

export const Tasksdata = [
    {
        id: 1,
        taskId: '#SHG - 01',
        title: 'Update Website Content',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'High',
        status: 'In Progress',
        avatars: [
            <span key="avatar1" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/1.jpg" alt="img" /> </span>,
            <span key="avatar2" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/2.jpg" alt="img" /> </span>,
            <span key="avatar3" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/3.jpg" alt="img" /> </span>,
            <span key="avatar4" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/4.jpg" alt="img" /> </span>,
        ],
        likes: 11,
        comments: 2,
        color: 'primary',
        badges: [
            <SpkBadge variant="info-transparent" key="development">Development</SpkBadge>
        ],
        idColor: 'primary1'
    },
    {
        id: 2,
        taskId: '#SHG - 02',
        title: 'Implement new feature for Karban app.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'In Progress',
        avatars: [
            <span key="avatar5" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/1.jpg" alt="img" /> </span>,
            <span key="avatar6" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/2.jpg" alt="img" /> </span>,
            <span key="avatar7" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/3.jpg" alt="img" /> </span>,
            <span key="avatar8" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/4.jpg" alt="img" /> </span>
        ],
        likes: 15,
        comments: 3,
        color: 'warning',
        badges: [<SpkBadge variant="info-transparent" key="development">Development</SpkBadge>],
        idColor: 'primary1'
    },
    {
        id: 3,
        taskId: '#SHG - 03',
        title: 'Develop new feature for Karban app',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'In Progress',
        avatars: [
            <span key="avatar9" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/5.jpg" alt="img" /> </span>,
            <span key="avatar10" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/9.jpg" alt="img" /> </span>
        ],
        likes: 25,
        comments: 5,
        color: 'warning',
        badges: [
            <SpkBadge variant="primary3-transparent me-1" key="development">Development</SpkBadge>,
            <span key="UI" className="bg-primary2-transparent">UI/UX</span>
        ],
        idColor: 'primary1'
    },
    {
        id: 4,
        taskId: '#SHG - 04',
        title: 'Design multi-usage landing page.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'Pending',
        avatars: [
            <span key="avatar11" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/5.jpg" alt="img" /> </span>,
            <span key="avatar12" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/9.jpg" alt="img" /> </span>
        ],
        likes: 30,
        comments: 8,
        color: 'warning',
        badges: [<SpkBadge key="badge2" variant="info-transparent" Customclass="me-1">Development</SpkBadge>, <SpkBadge key="badge3" variant="info-transparent">Development</SpkBadge>],
        idColor: 'primary1'
    }
];

export const Taskdata1 = [
    {
        id: 1,
        taskId: '#SHG - 05',
        title: 'Adding Authentication Pages.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'Low',
        status: 'In Progress',
        likes: 8,
        comments: 4,
        badges: [<SpkBadge key="badge4" variant="primary2-transparent">Authentication</SpkBadge>],
        avatars: [
            <span key="avatar13" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/4.jpg" alt="img" /> </span>,
            <span key="avatar14" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/13.jpg" alt="img" /> </span>,
            <span key="avatar15" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/5.jpg" alt="img" /> </span>
        ],
        color: "warning",
        idColor: 'info'
    },
    {
        id: 2,
        taskId: '#SHG - 06',
        title: 'New Marketing Campaign Strategy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        priority: 'High',
        status: 'In Progress',
        likes: 23,
        comments: 12,
        badges: [<SpkBadge key="badge5" variant="primary3-transparent" Customclass="ms-1">Marketing</SpkBadge>],
        avatars: [
            <span key="avatar16" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/4.jpg" alt="img" /> </span>,
            <span key="avatar17" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/13.jpg" alt="img" /> </span>,
            <span key="avatar18" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/5.jpg" alt="img" /> </span>
        ],
        color: "primary",
        idColor: 'info'
    }
]

export const Taskdata2 = [
    {
        id: 1,
        taskId: "#SHG - 07",
        title: "Developing Calendar & Mail pages.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        badges: [
            <SpkBadge key="badge6" variant="primary-transparent">UI Design</SpkBadge>,
            <SpkBadge key="badge7" variant="primary3-transparent">Development</SpkBadge>
        ],
        priority: "Medium",
        status: "In Progress",
        avatars: [
            <span key="avatar19" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/7.jpg" alt="img" /> </span>,
            <span key="avatar20" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/10.jpg" alt="img" /> </span>,
            <span key="avatar21" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/11.jpg" alt="img" /> </span>
        ],
        likes: 10,
        comments: 18,
        color: 'info',
        idColor: 'primary1'
    },
    {
        id: 2,
        taskId: "#SHG - 08",
        title: "Project Design in Figma and Sketch",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        badges: [
            <SpkBadge key="badge8" variant="primary3-transparent">Design</SpkBadge>
        ],
        priority: "Medium",
        status: "In Progress",
        avatars: [
            <span key="avatar22" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/13.jpg" alt="img" /> </span>,
            <span key="avatar23" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/6.jpg" alt="img" /> </span>
        ],
        likes: 5,
        comments: 2,
        color: 'info',
        idColor: 'primary1'
    },
];

export const Taskdata4 = [
    {
        id: 1,
        taskId: "#SHG - 11",
        title: "New Project Update",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "High",
        status: "Completed",
        badges: [<SpkBadge key="badge9" variant="primary3-transparent">Review</SpkBadge>],
        avatars: [
            <span key="avatar24" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/6.jpg" alt="img" /> </span>,
            <span key="avatar25" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/13.jpg" alt="img" /> </span>
        ],
        likes: 9,
        comments: 35,
        color: 'primary1',
        idColor: 'primary'
    },
    {
        id: 2,
        taskId: "#SHG - 12",
        title: "React JS New Version Update",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "High",
        status: "Completed",
        badges: [<SpkBadge key="badge10" variant="primary3-transparent">Development</SpkBadge>],
        avatars: [
            <span key="avatar26" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/10.jpg" alt="img" /> </span>,
            <span key="avatar27" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/11.jpg" alt="img" /> </span>,
            <span key="avatar28" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/1.jpg" alt="img" /> </span>,
        ],
        likes: 22,
        comments: 12,
        color: 'primary1',
        idColor: 'primary'
    },
    {
        id: 3,
        taskId: "#SHG - 13",
        title: "Project Discussion with Client",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "High",
        status: "Completed",
        badges: [<SpkBadge key="badge11" variant="primary3-transparent">Discussion</SpkBadge>],
        avatars: [
            <span key="avatar29" className="avatar avatar-sm avatar-rounded"> <img src="../../../assets/images/faces/4.jpg" alt="img" /> </span>,

        ],
        likes: 11,
        comments: 12,
        color: 'primary1',
        idColor: 'primary'
    },
];
export const Taskdata5 = [
    {
        id: 1,
        taskId: "#SHG - 10",
        title: "Design Architecture Strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        priority: "Medium",
        status: "In Progress",
        badges: (
            <span className="badge bg-primary3-transparent">Review</span>
        ),
        avatars: [
            <span key="avatar1" className="avatar avatar-sm avatar-rounded">
                <img src="../../../assets/images/faces/3.jpg" alt="img" />
            </span>,
            <span key="avatar2" className="avatar avatar-sm avatar-rounded">
                <img src="../../../assets/images/faces/5.jpg" alt="img" />
            </span>,
            <span key="avatar3" className="avatar avatar-sm avatar-rounded">
                <img src="../../../assets/images/faces/7.jpg" alt="img" />
            </span>
        ],
        likes: 9,
        comments: 35,
        color: 'info',
        idColor: 'primary1'
    },
]