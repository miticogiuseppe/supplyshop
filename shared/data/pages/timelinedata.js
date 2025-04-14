import React from 'react';
import Link from 'next/link';

export const timelineData = [
    {
        date: '22 January 2024',
        color: 'primary2',
        entries: [
            {
                time: '15:36, Monday',
                user: 'You',
                action: (
                    <>
                        Tagged <b>Emma Thompson</b> in a Photo.
                    </>
                ),
                description: '"Including Emma in cherished memories captured on camera, tagging her in a photo to share a moment of joy or significance and inviting her to reminisce together."',
                media: [
                    '../../assets/images/media/media-17.jpg',
                    '../../assets/images/media/media-18.jpg',
                ],
                Navigate: "#!",
            },
            {
                time: '22:45, Monday',
                user: 'Michel',
                action: (
                    <>
                        Retweeted <Link scroll={false} href="#!" className="text-primary1 fw-medium text-decoration-underline">Emily Davis</Link>'s Tweet.
                    </>
                ),
                description: 'Amplifying Emily\'s message and sharing it with your own Twitter followers, acknowledging the importance or relevance of her tweet and extending its reach across the platform.',
                media: [],
                Navigate: "#!",
            },
        ],
    },
    {
        date: '25 January 2024',
        color: "primary3",
        entries: [
            {
                time: '09:14, Thursday',
                user: 'You',
                action: (
                    <>
                        <span className="text-default"><b>You</b> Shared <b>a Recipe </b></span>on Sarah Johnson's Timeline.
                    </>
                ),
                description: 'Spreading culinary inspiration by sharing a mouth-watering recipe on Sarah\'s timeline, encouraging others to indulge in delicious homemade dishes and fostering a sense of community around food.',
                media: [
                    '../../assets/images/media/media-59.jpg',
                    '../../assets/images/media/media-60.jpg',
                    '../../assets/images/media/media-61.jpg',
                ],
                Navigate: "#!",
            },
            {
                time: '17:56, Thursday',
                user: 'You',
                action: (
                    <>
                        Participated in a Poll Created by <b> Ethan Clark</b>  <a className="text-primary2" href="#!"><u>#analysis-decision-making</u></a>.
                    </>
                ),
                description: 'Sharing your perspective and contributing to Ethan\'s data collection through participation in his poll, providing valuable feedback and insights to inform further analysis and decision-making.',
                media: [
                    '../../assets/images/media/media-26.jpg',
                    '../../assets/images/media/media-29.jpg',
                ],
                Navigate: "#!",
            },
        ],
    },
];


//timeline2
export const notifications = [
    {
        date: "Saturday",
        time: "06:15",
        avatarSrc: "../../assets/images/faces/1.jpg",
        title: "Event Conceptualization",
        description: "Brainstormed event ideas and themes. Conducted initial research on venue options and potential sponsors.",
        badgeContent: "May 21, 2024 - Ongoing",
        badgeClass: "primary",
        End: true,
        Navigate: "#!"

    },
    {
        date: "Tuesday",
        time: "22:55",
        avatarSrc: "../../assets/images/faces/15.jpg",
        title: "Preparation and Organization",
        description: "Secured venue and finalized contracts with vendors. Created event marketing materials and promotional strategies. Established event logistics.",
        badgeContent: "May 21 - 26, 2024",
        badgeClass: "primary1",
        End: true,
        Start: true,
        Navigate: "#!"
    },
    {
        date: "Monday",
        time: "13:05",
        avatarSrc: "../../assets/images/faces/2.jpg",
        title: "Event Execution",
        description: "Set up event space and coordinated with vendors for equipment and services. Facilitated event activities, speakers, and entertainment.",
        badgeContent: "May 20, 2024",
        badgeClass: "primary2",
        End: true,
        Navigate: "#!"
    },
    {
        date: "Yesterday",
        time: "08:45",
        avatarSrc: "../../assets/images/faces/8.jpg",
        title: "Product Development",
        description: "Conducted market research and identified customer needs. Defined product specifications and features.",
        badgeContent: "May 1 - May 15, 2024",
        badgeClass: "primary3",
        End: true,
        Start: true,
        Navigate: "#!"
    },
    {
        date: "Today",
        time: "12:24",
        avatarSrc: "../../assets/images/faces/13.jpg",
        title: "Team Building Retreat",
        description: "Our team took a break to recharge and bond. We came back stronger!",
        badgeContent: "February 15 - April 30, 2024",
        badgeClass: "secondary",
        End: true,
        Navigate: "#!"
    },
    {
        date: "Today",
        time: "04:11",
        avatarSrc: "../../assets/images/faces/6.jpg",
        title: "Design and Development",
        description: "Designed user interface (UI) and user experience (UX) elements. Developed product functionalities.",
        badgeContent: "January 20 - February 10, 2024",
        badgeClass: "warning",
        End: true,
        Start: true,
        Navigate: "#!"
    },
    {
        date: "Today",
        time: "02:52",
        avatarSrc: "../../assets/images/faces/11.jpg",
        title: "Testing and Launch",
        description: "Conducted comprehensive testing to ensure product quality and stability. Prepared marketing materials.",
        badgeContent: "January 15, 2024",
        badgeClass: "info",
        End: true,
        Navigate: "#!"
    },
];





///timeline3
export const steps = [
    {
        date: "October 6, 2024",
        title: "Planning",
        content: "Research and competitor analysis.",
        imageSrc: "../../assets/images/faces/11.jpg",
        bgClass: "primary1",
        Customclass: "",
        popoverContent: "And here's some amazing content. It's very engaging. Right?",
        popoverTitle: "2003"
    },
    {
        date: "September 12, 2024",
        title: "Design",
        content: "Frontend and backend components.",
        imageSrc: "../../assets/images/faces/1.jpg",
        bgClass: "primary2",
        Customclass: "content-top",
        popoverContent: "And here's some amazing content. It's very engaging. Right?",
        popoverTitle: "2004"
    },
    {
        date: "July 20, 2024",
        title: "Testing",
        content: "Conducted comprehensive testing.",
        imageSrc: "../../assets/images/faces/12.jpg",
        bgClass: "primary3",
        Customclass: "",
        popoverContent: "And here's some amazing content. It's very engaging. Right?",
        popoverTitle: "2005"
    },
    {
        date: "May 18, 2024",
        title: "Deployment",
        content: "Conducted final checks.",
        imageSrc: "../../assets/images/faces/3.jpg",
        bgClass: "secondary",
        Customclass: "content-top",
        popoverContent: "And here's some amazing content. It's very engaging. Right?",
        popoverTitle: "2010"
    },
    {
        date: "April 5, 2024",
        title: "Post-Launch",
        content: "Provided ongoing support.",
        imageSrc: "../../assets/images/faces/14.jpg",
        bgClass: "warning",
        Customclass: "",
        popoverContent: "And here's some amazing content. It's very engaging. Right?",
        popoverTitle: "2020"
    }
];



