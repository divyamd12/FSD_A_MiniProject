import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}> 
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/logo.png" alt="Shashwat" width={50} height={50} />
					<h1 className={styles.logoText}>MITblog</h1>
				</div>
				<p className={styles.desc}>Description</p>
				<div className={styles.icons}>
					<Image src="/facebook.png" alt="" width={18} height={18}/>
					<Image src="/instagram.png" alt="" width={18} height={18}/>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contacts</Link>
				</div>
			</div>

			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/blog?cat=style">Style</Link>
					<Link href="/blog?cat=fashion">Fashion</Link>
					<Link href="/blog?cat=coding/">Coding</Link>
					<Link href="/blog?cat=travel">Travel</Link>
				</div>
			</div>

			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="https://www.facebook.com/">Facebook</Link>
					<Link href="https://www.instagram.com/">Instagram</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
