import { motion } from 'framer-motion';
import { icons } from '@/Assets/icons';
import { Button } from '@/Components';
import { contributers } from '@/DummyData/contributors';

export default function ProjectContributors() {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    Our Contributors
                </h1>
                <Button
                    variant="outline"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    Back to Top
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contributers.map((contributor, index) => (
                    <motion.div
                        key={contributor.email}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col"
                    >
                        <div className="flex items-start space-x-4 mb-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                {contributor.avatar ? (
                                    <img
                                        src={contributor.avatar}
                                        alt={contributor.name}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xl font-medium">
                                        {contributor.name.charAt(0)}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {contributor.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {contributor.email}
                                        </p>
                                    </div>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">
                                        Joined:{' '}
                                        {formatDate(
                                            contributor.contributorSince
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                {contributor.techStack
                                    ?.slice(0, 2)
                                    .map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                {contributor.techStack?.length > 2 && (
                                    <span className="text-xs text-gray-500">
                                        +{contributor.techStack.length - 2} more
                                    </span>
                                )}
                            </div>

                            <a
                                href={contributor.profilelink}
                                target="_blank"
                                className="bg-[#4977ec] hover:bg-[#3a62c4] text-white text-sm  rounded-md px-3 py-2 transition-colors duration-200 flex items-center"
                            >
                                {/* <span className="mr-1">{icons.link}</span> */}
                                View Profile
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            modify this and show me up the contributers and show link correctly,
            for Btn choose this styling className="w-full bg-[#4977ec]
            rounded-md text-white px-[4px] py-[5px] md:w-32"
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>Thank you to all our amazing contributors!</p>
                <p className="mt-2">
                    Want to join?{' '}
                    <a
                        href="/contribute"
                        className="text-blue-500 hover:underline"
                    >
                        Submit your application
                    </a>
                </p>
            </div>
        </div>
    );
}
