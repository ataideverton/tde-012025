'use client'

import Link from 'next/link'

export default function Menu() {

    return (
        <nav>
            <ul>
                <li><Link href="/">Pagina Inicial</Link></li>
                <li>
                    <Link href="#">Material extra ▾</Link>
                    <ul className="dropdown">
                        <li><Link href="/videos">Videos</Link></li>
                        <li><Link href="/artigos">Artigos e Reportagens</Link></li>
                        <li><Link href="/livros">Livros</Link></li>
                    </ul>
                </li>
                <li><Link href="/referencias">Referencias</Link></li>
                <li><Link href="/about">Autoria</Link></li>
            </ul>
        </nav>
    )
}