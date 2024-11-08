import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { airbuds, bigSamsung1, bigSamsung2, bigSamsung3, customer1, customer2, samsungg, tablet, watch } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "SuperQuality" },
    { href: "#contact-us", label: "Contact Us" },
];

export const samsungs = [
    {
        bigSamsung: bigSamsung1,
    },
    {
        bigSamsung: bigSamsung2,
    },
    {
        bigSamsung: bigSamsung3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: watch,
        name: "Samsung watch",
        price: "$200.20",
    },
    {
        imgURL: tablet,
        name: "Tablet s9",
        price: "$210.20",
    }, 
    {
        imgURL: samsungg,
        name: "Samsung Z Fold 5",
        price: "$220.20",
    },
    {
        imgURL: airbuds,
        name: "Airbuds pro",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Samsung s23 Ultra", link: "/" },
            { name: "Samsung Z Fold 5", link: "/" },
            { name: "Samsung Watch", link: "/" },
            { name: "Crystal UHD", link: "/" },
            { name: "Airbuds Pro", link: "/" },
            { name: "Camera", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@samsung.com", link: "mailto:customer@samsung.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];