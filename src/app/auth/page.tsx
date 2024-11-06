import Link from 'next/link';

export default function AuthPage() {
	return (
		<div className="">
			<Link href="/api/auth/login">Logowanie do serwisu</Link>
		</div>
	);
}
