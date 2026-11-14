import React from 'react';
import { Callout, Closing, Facts, FileCard, Route, Routes } from '@instinct/files';
import heroBanner from './photos/hero-banner.jpg';
import brandAp from './photos/brand-ap.jpg';
import brandJsw from './photos/brand-jsw.jpg';
import puPalette from './photos/pu-palette.jpg';
import oorkadavuFront from './photos/oorkadavu-storefront.jpg';
import oorkadavuInside from './photos/oorkadavu-inside.jpg';
import edavannapparaFront from './photos/edavannappara-storefront.jpg';
import edavannapparaInside from './photos/edavannappara-inside.jpg';

const whatsapp = 'https://wa.me/919746334755';

function PhotoSlot({ label, dark }: { label: string; dark?: boolean }) {
    return <div className={dark ? 'photo-slot photo-slot--dark' : 'photo-slot'}>
        <span className="photo-slot-tag">Photo coming</span>
        <span className="photo-slot-label">{label}</span>
    </div>;
}

const stock = [
    { img: brandAp, dot: '#e36d42', name: 'Asian Paints', dealer: true, detail: 'Interior and exterior emulsions, enamels, primers and distempers' },
    { img: brandJsw, dot: '#c0392b', name: 'JSW Paints', dealer: true, detail: 'Emulsions, enamels and wood finishes' },
    { dot: '#d8b76a', name: 'Painting supplies', detail: 'Brushes, rollers, thinners, wall putty, sandpaper and masking tape' },
    { dot: '#73a89a', name: 'Colour mixing', detail: 'Shade-card advice and colour mixing in the shop' },
];

const branches = [
    {
        name: 'Edavannappara',
        tag: 'Main shop',
        accent: '#0f766e',
        facts: [
            { label: 'Address', value: 'Opposite Lifecare Hospital, Edavannappara, Kerala 673640' },
            { label: 'Phone', value: '+91 97463 34755' },
            { label: 'Mon-Sat', value: '7 am - 8 pm' },
            { label: 'Sunday', value: '7 am - 12 noon' },
        ],
        tel: 'tel:+919746334755',
        maps: 'https://www.google.com/maps/search/?api=1&query=B+E+Paints+%28Traders%29&query_place_id=ChIJx2ZgeTpEpjsRHK60sS8v54Q',
        slots: ['Storefront, Edavannappara', 'Inside the shop, Edavannappara'],
        photos: [
            { src: edavannapparaFront, alt: 'B E Paints storefront at Edavannappara, sign above a display of Asian Paints buckets' },
            { src: edavannapparaInside, alt: 'JSW Paints display wall with colour tins inside the Edavannappara shop' },
        ],
    },
    {
        name: 'Puthiyedathparamb',
        tag: 'Branch',
        accent: '#c2410c',
        facts: [
            { label: 'Address', value: 'Puthiyedathparamb, Olavattur, Kerala 673637' },
            { label: 'Phone', value: '+91 97463 34755' },
            { label: 'Hours', value: 'Every day 7 am - 8 pm, including Sunday' },
        ],
        tel: 'tel:+919746334755',
        maps: 'https://www.google.com/maps/search/?api=1&query=11.213902%2C75.936317',
        slots: ['Storefront, Puthiyedathparamb', 'Inside the shop, Puthiyedathparamb'],
        photos: null,
    },
    {
        name: 'Oorkadavu',
        tag: 'Branch',
        accent: '#1d4e89',
        facts: [
            { label: 'Address', value: 'Kondotty Road, Oorkadavu, Kerala 673640' },
            { label: 'Phone', value: '+91 95674 77830' },
            { label: 'Mon-Sat', value: '7 am - 8 pm' },
            { label: 'Sunday', value: '7 am - 11:30 am' },
        ],
        tel: 'tel:+919567477830',
        maps: 'https://www.google.com/maps/search/?api=1&query=11.243980%2C75.925607',
        slots: ['Storefront, Oorkadavu', 'Inside the shop, Oorkadavu'],
        photos: [
            { src: oorkadavuFront, alt: 'B E Traders storefront at Oorkadavu, lit up in the evening' },
            { src: oorkadavuInside, alt: 'Shelves fully stocked with paint inside the Oorkadavu shop' },
        ],
    },
];

function Home() {
    return <>
        <header className="hero" style={{ backgroundImage: `linear-gradient(160deg, rgb(9 45 42 / 0.86) 0%, rgb(13 58 54 / 0.80) 55%, rgb(18 55 88 / 0.88) 100%), url(${heroBanner})` }}>
            <p className="hero-eyebrow">Paints and supplies - Kondotty, Kerala</p>
            <h1 className="hero-title">B E Paints</h1>
            <p className="hero-tag">Paints and painting supplies from Asian Paints and JSW Paints, at three shops in and around Kondotty. Call or WhatsApp to check stock and today's prices.</p>
            <div className="swatches" aria-hidden="true">
                {['#e36d42', '#d8b76a', '#73a89a', '#5c76ad', '#c95f5b'].map((c) => <span key={c} className="swatch" style={{ background: c }} />)}
            </div>
            <div className="hero-actions">
                <a className="pill pill--whatsapp" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
                <a className="pill pill--light" href="tel:+919746334755">Call the main shop</a>
            </div>
        </header>

        <section className="stock">
            <h2 className="section-title">What we stock</h2>
            <div className="stock-grid">
                {stock.map((item) => (
                    <div key={item.name} className={item.img ? 'stock-card stock-card--brand' : 'stock-card'}>
                        {item.img
                            ? <img src={item.img} alt={`Paint can artwork for the ${item.name} shelf`} className="stock-img" />
                            : <span className="stock-dot" style={{ background: item.dot }} />}
                        <div>
                            <strong>{item.name}</strong>
                            {item.dealer && <span className="dealer-chip">Main dealer</span>}
                            <span className="stock-detail">{item.detail}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="feature">
            <img src={puPalette} alt="Glossy PU wood finish on a tabletop and cabinet door" className="feature-img" />
            <div className="feature-body">
                <span className="feature-chip">Only at select shops</span>
                <h3 className="feature-title">Asian Paints PU Palette, available here</h3>
                <p className="feature-text">Premium polyurethane wood finishes - deep gloss, tough and long-lasting, for interior and exterior wood. Not every paint shop stocks the PU Palette range. We do.</p>
            </div>
        </section>

        <h2 className="section-title">Our shops</h2>
        {branches.map((branch) => (
            <section key={branch.name} className="branch" style={{ '--accent': branch.accent } as React.CSSProperties}>
                <div className="branch-bar" />
                <div className="branch-body">
                    <span className="branch-chip">{branch.tag}</span>
                    <h3 className="branch-name">{branch.name}</h3>
                    <div className="photo-slot-row">
                        {branch.photos
                            ? branch.photos.map((photo) => <img key={photo.alt} src={photo.src} alt={photo.alt} className="photo" />)
                            : branch.slots.map((slot) => <PhotoSlot key={slot} label={slot} />)}
                    </div>
                    <Facts items={branch.facts} />
                    {branch.caveat && <Callout title="Before this goes live" tone="warning">{branch.caveat}</Callout>}
                    <div className="branch-actions">
                        <a className="pill pill--accent" href={branch.tel}>Call this branch</a>
                        <a className="pill pill--outline" href={branch.maps} target="_blank" rel="noreferrer">Directions</a>
                    </div>
                </div>
            </section>
        ))}

        <section className="contact">
            <p className="contact-eyebrow">Talk to us</p>
            <h2 className="contact-title">Call or WhatsApp</h2>
            <p className="contact-line">Call or WhatsApp: +91 97463 34755</p>
            <p className="contact-line contact-line--dim">bepaints.com</p>
            <a className="pill pill--whatsapp" href={whatsapp} target="_blank" rel="noreferrer">Message on WhatsApp</a>
        </section>
    </>;
}

export function App() {
    return <FileCard>
        <Routes><Route path="/" element={<Home />} /></Routes>
        <Closing>Addresses and hours from the shop's Google listings, checked 14 Nov 2026. Photos are the shop's own; photos of Puthiyedathparamb to be added.</Closing>
    </FileCard>;
}
