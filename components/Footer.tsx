export default function Footer() {
    return (
        <>
            <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-left">
                            <p style={{ color: 'var(--muted)' }}>
                                © 2025 Md. Muhaiminul Islam Ninad
                            </p>
                        </div>
                        <div className="text-right">
                            <p style={{ color: 'var(--muted)' }}>
                                Built with Next.js and Tailwind CSS
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>);
}