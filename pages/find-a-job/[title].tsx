import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { POSTINGS } from '@/constants/postings';

const SearchJobTitle = () => {
	const router = useRouter();
	console.log(router.query.title);
	const CATEGORIES = [
		'Accounting',
		'Business & Consulting',
		'Human Research',
		'Marketing & Finance',
		'Design & Development',
		'Finance Management',
		'Project Management',
		'Customer Service',
		'Healthcare',
		'Education',
		'Engineering',
	];
	const EXPERIENCE = ['Beginner', 'Intermediate', 'Expert'];

	return (
		<main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
			<Header />
			<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-outfit py-[50px] md:py-[80px]'>
				<div className='mx-auto flex flex-col lg:max-w-3xl gap-4 text-center pb-[50px] md:pb-[80px]'>
					<h2 className='text-3xl lg:text-5xl font-bold'>
						{router.query.title}
					</h2>
				</div>
				<div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
					<div className='flex flex-col gap-4 lg:col-span-1 h-fit lg:sticky lg:top-24'>
						<div>
							<h2 className='text-xl lg:text-3xl font-bold'>
								Category
							</h2>
							<div className='flex flex-col gap-2 mt-4'>
								{CATEGORIES.map((item, idx) => (
									<Link
										href={`/find-a-job/${item}`}
										key={idx}
									>
										<h1 className='text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10'>
											{item}
										</h1>
									</Link>
								))}
							</div>
						</div>
						<div>
							<h2 className='text-xl lg:text-3xl font-bold'>
								Job Level
							</h2>
							<div className='flex flex-col gap-2 mt-4'>
								{EXPERIENCE.map((item, idx) => (
									<Link
										href={`/find-a-job/${item}`}
										key={idx}
									>
										<h1 className='text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10'>
											{item}
										</h1>
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className='lg:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2'>
						{POSTINGS.filter((job) =>
							router.query.title === 'Beginner' ||
							router.query.title === 'Intermediate' ||
							router.query.title === 'Expert'
								? job.experience === router.query.title
								: job.category === router.query.title
						).map((job, idx) => (
							<div
								className='w-full flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 h-fit bg-app-grey-light p-4 md:p-8 rounded border border-white/10'
								key={idx}
							>
								<div className='flex flex-col gap-4'>
									<h2 className='bg-app-slate-blue rounded font-medium px-2 py-1 w-fit'>
										{job.category}
									</h2>
									<h1 className='font-semibold text-2xl'>
										{job.title}
									</h1>
									<div className='text-base flex items-center gap-4'>
										<p>
											<span className='font-medium'>
												{job.pay}
											</span>{' '}
											INR
										</p>
										<p>•</p>
										<p>{job.experience}</p>
									</div>
								</div>
								<div className='flex gap-4 items-center'>
									<div>
										<Image
											unoptimized
											className='w-12'
											src='https://assets.website-files.com/63b3bf674632664abc613903/63b658d0d4a06814966f7225_company-04.png'
											alt='company logo'
											width={100}
											height={100}
										/>
									</div>
									<div>
										<h1>Company Name</h1>
										<p className='flex items-center gap-1'>
											<MapPin
												strokeWidth={1.5}
												size={16}
											/>{' '}
											{job.location}
										</p>
									</div>
								</div>
								<Button
									variant={'secondary'}
									className='h-12 text-base'
									asChild
								>
									<Link href={`/posting/${job.id}`}>
										View Posting
									</Link>
								</Button>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default SearchJobTitle;
