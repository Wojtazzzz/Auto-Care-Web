import Link from 'next/link';

export default function AuthPage() {
	return (
		<div>
			<Link href="/api/auth/login">Logowanie do serwisu</Link>
		</div>
	);
}
