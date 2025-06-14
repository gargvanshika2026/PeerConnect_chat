export const projects = [
    {
        title: 'EduBridge',
        description:
            'An AI-powered student dashboard to track learning progress and recommend resources.',
        owner: {
            name: 'Aarav Kapoor',
            email: 'aarav.k@example.com',
            profilelink: 'https://peerconnect.dev/users/aaravk',
            avatar: 'https://i.pravatar.cc/150?img=1%27',
        },
        createdAt: '2024-11-12',
        githubLink: 'https://github.com/aaravk/edubridge',
        contributors: [
            {
                name: 'Simran Mehta',
                email: 'simran.m@example.com',
                profilelink: 'https://peerconnect.dev/users/simranm',
                avatar: 'https://i.pravatar.cc/150?img=6%27',
                contributorSince: '2024-11-15',
            },
            {
                name: 'Devansh Gupta',
                email: 'devansh.g@example.com',
                profilelink: 'https://peerconnect.dev/users/devanshg',
                avatar: 'https://i.pravatar.cc/150?img=3%27',
                contributorSince: '2024-11-18',
            },
            {
                name: 'Neha Roy',
                email: 'neha.r@example.com',
                profilelink: 'https://peerconnect.dev/users/nehar',
                avatar: 'https://i.pravatar.cc/150?img=1%27',
                contributorSince: '2024-11-20',
            },
            {
                name: 'Ishaan Batra',
                email: 'ishaan.b@example.com',
                profilelink: 'https://peerconnect.dev/users/ishaanb',
                avatar: 'https://i.pravatar.cc/150?img=2%27',
                contributorSince: '2024-11-25',
            },
        ],
        tags: [
            { name: 'education', color: '#F3E5F5' },
            { name: 'journaling', color: '#E3F2FD' },
            { name: 'dashboard', color: '#FFF8E1' },
            { name: 'student-tracking', color: '#F3E5F5' },
            { name: 'recommendation-engine', color: '#E0F7FA' },
        ],

        chat: [],
        projectId: 'p001',
        requests: '',
        taskList: [
            {
                taskId: 't001',
                title: 'Integrate AI Recommendation Engine',
                description:
                    'Use collaborative filtering to suggest resources based on student performance.',
                status: 'in-progress',
                priority: 'high',
                assignee: {
                    name: 'Simran Mehta',
                    email: 'simran.m@example.com',
                    profilelink: 'https://peerconnect.dev/users/simranm',
                    avatar: '',
                },
                dueDate: '2025-06-15',
            },
        ],
        detail: '<p>This platform helps students visualize their learning journey and recommends content adaptively.</p>',
    },
    {
        title: 'HealthConnect',
        description:
            'A secure portal that enables easy scheduling and management of virtual doctor consultations. It ensures confidential communication and smooth access to healthcare services anytime, anywhere.',
        owner: {
            name: 'Riya Malhotra',
            email: 'riya.m@example.com',
            profilelink: 'https://peerconnect.dev/users/riyamalhotra',
            avatar: '',
        },
        createdAt: '2025-01-05',
        githubLink: 'https://github.com/riyamalhotra/healthconnect',
        contributors: [
            {
                name: 'Simran Mehta',
                email: 'simran.m@example.com',
                profilelink: 'https://peerconnect.dev/users/simranm',
                avatar: 'https://i.pravatar.cc/150?img=4%27',
                contributorSince: '2024-11-15',
            },
            {
                name: 'Raghav Joshi',
                email: 'raghav.j@example.com',
                profilelink: 'https://peerconnect.dev/users/raghavj',
                avatar: 'https://i.pravatar.cc/150?img=6%27',
                contributorSince: '2024-11-22',
            },
            {
                name: 'Ananya Das',
                email: 'ananya.d@example.com',
                profilelink: 'https://peerconnect.dev/users/ananyad',
                avatar: 'https://i.pravatar.cc/150?img=7%27',
                contributorSince: '2024-11-30',
            },
        ],
        tags: [
            { name: 'healthcare', color: '#FCE4EC' },
            { name: 'medicine', color: '#E1F5FE' },
            { name: 'appointment-system', color: '#F9FBE7' },
            { name: 'patient-care', color: '#F3E5F5' },
        ],
        chat: [],
        projectId: 'p002',
        requests: '',
        taskList: [
            {
                taskId: 't002',
                title: 'Build Appointment Calendar UI',
                description:
                    'Develop an interactive calendar with time slot selection for appointments.',
                status: 'open',
                priority: 'medium',
                assignee: {
                    name: 'Riya Malhotra',
                    email: 'riya.m@example.com',
                    profilelink: 'https://peerconnect.dev/users/riyamalhotra',
                    avatar: '',
                },
                dueDate: '2025-06-25',
            },
        ],
        detail: '<p>Includes features like video consultations, prescription uploads, and patient-doctor messaging.</p>',
    },
    {
        title: 'FinPath',
        description:
            'A budget planning and expense tracking app for students and young professionals.',
        owner: {
            name: 'Aditya Verma',
            email: 'aditya.v@example.com',
            profilelink: 'https://peerconnect.dev/users/adityav',
            avatar: '',
        },
        createdAt: '2025-02-14',
        githubLink: 'https://github.com/adityav/finpath',
        contributors: [
            {
                name: 'Kriti Nanda',
                email: 'kriti.n@example.com',
                profilelink: 'https://peerconnect.dev/users/kritin',
                avatar: 'https://i.pravatar.cc/150?img=8%27',
                contributorSince: '2025-02-18',
            },
            {
                name: 'Tanish Mehra',
                email: 'tanish.m@example.com',
                profilelink: 'https://peerconnect.dev/users/tanishm',
                avatar: 'https://i.pravatar.cc/150?img=9%27',
                contributorSince: '2025-02-20',
            },
            {
                name: 'Aditya Verma',
                email: 'aditya.v@example.com',
                profilelink: 'https://peerconnect.dev/users/adityav',
                avatar: 'https://i.pravatar.cc/150?img=10%27',
                contributorSince: '2025-02-14',
            },
        ],
        tags: [
            { name: 'fintech', color: '#E0F2F1' },
            { name: 'budgeting', color: '#FFF3E0' },
            { name: 'student-finance', color: '#F3E5F5' },
            { name: 'expense-tracking', color: '#E8F5E9' },
            { name: 'upi-integration', color: '#E0F7FA' },
        ],
        chat: [],
        projectId: 'p003',
        requests: '',
        taskList: [
            {
                taskId: 't003',
                title: 'Link with UPI for Expense Logging',
                description:
                    'Integrate UPI API to auto-fetch daily transaction history.',
                status: 'open',
                priority: 'high',
                assignee: {
                    name: 'Aditya Verma',
                    email: 'aditya.v@example.com',
                    profilelink: 'https://peerconnect.dev/users/adityav',
                    avatar: '',
                },
                dueDate: '2025-07-01',
            },
        ],
        detail: '<p>Track monthly budgets, analyze spending, and get smart saving tips via dashboards.</p>',
    },
    {
        title: 'GreenSteps',
        description:
            'An app to track and promote sustainability efforts in college campuses and institutes.',
        owner: {
            name: 'Tanvi Sharma',
            email: 'tanvi.s@example.com',
            profilelink: 'https://peerconnect.dev/users/tanvisharma',
            avatar: '',
        },
        createdAt: '2025-03-01',
        githubLink: 'https://github.com/tanvisharma/greensteps',
        contributors: [
            {
                name: 'Tanvi Sharma',
                email: 'tanvi.s@example.com',
                profilelink: 'https://peerconnect.dev/users/tanvisharma',
                avatar: 'https://i.pravatar.cc/150?img=2%27',
                contributorSince: '2025-03-01',
            },
            {
                name: 'Ayaan Rathi',
                email: 'ayaan.r@example.com',
                profilelink: 'https://peerconnect.dev/users/ayaanr',
                avatar: 'https://i.pravatar.cc/150?img=6%27',
                contributorSince: '2025-03-05',
            },
            {
                name: 'Preeti Kaur',
                email: 'preeti.k@example.com',
                profilelink: 'https://peerconnect.dev/users/preetik',
                avatar: 'https://i.pravatar.cc/150?img=12%27',
                contributorSince: '2025-03-08',
            },
        ],
        tags: [
            { name: 'environment', color: '#F1F8E9' },
            { name: 'sustainability', color: '#E0F2F1' },
            { name: 'eco-friendly', color: '#E8F5E9' },
            { name: 'campus-app', color: '#FFFDE7' },
            { name: 'carbon-tracking', color: '#F9FBE7' },
        ],
        chat: [],
        projectId: 'p004',
        requests: '',
        taskList: [
            {
                taskId: 't004',
                title: 'Build Carbon Footprint Estimator',
                description:
                    'Allow users to calculate their footprint based on daily activities.',
                status: 'in-progress',
                priority: 'medium',
                assignee: {
                    name: 'Tanvi Sharma',
                    email: 'tanvi.s@example.com',
                    profilelink: 'https://peerconnect.dev/users/tanvisharma',
                    avatar: '',
                },
                dueDate: '2025-07-10',
            },
        ],
        detail: '<p>Encourages eco-friendly habits with badges, tips, and event tracking for sustainability drives.</p>',
    },
    {
        title: 'NeuroQuest',
        description:
            'An AI-driven chatbot that offers mental health guidance, journaling, and daily check-ins.',
        owner: {
            name: 'Kunal Raj',
            email: 'kunal.r@example.com',
            profilelink: 'https://peerconnect.dev/users/kunalraj',
            avatar: '',
        },
        createdAt: '2025-04-11',
        githubLink: 'https://github.com/kunalraj/neuroquest',
        contributors: [
            {
                name: 'Kunal Raj',
                email: 'kunal.r@example.com',
                profilelink: 'https://peerconnect.dev/users/kunalraj',
                avatar: 'https://i.pravatar.cc/150?img=13%27',
                contributorSince: '2025-04-11',
            },
            {
                name: 'Megha Bhatt',
                email: 'megha.b@example.com',
                profilelink: 'https://peerconnect.dev/users/meghab',
                avatar: 'https://i.pravatar.cc/150?img=14%27',
                contributorSince: '2025-04-14',
            },
            {
                name: 'Yash Tiwari',
                email: 'yash.t@example.com',
                profilelink: 'https://peerconnect.dev/users/yasht',
                avatar: 'https://i.pravatar.cc/150?img=15%27',
                contributorSince: '2025-04-16',
            },
        ],
        tags: [
            { name: 'mental health', color: '#E8EAF6' },
            { name: 'chatbot', color: '#E0F7FA' },
            { name: 'ai', color: '#F3E5F5' },
            { name: 'mood-tracking', color: '#E8F5E9' },
            { name: 'journaling', color: '#FFF3E0' },
        ],
        chat: [],
        projectId: 'p005',
        requests: '',
        taskList: [
            {
                taskId: 't005',
                title: 'Add Mood-Based Content Suggestion',
                description:
                    'Use sentiment analysis to suggest quotes or exercises.',
                status: 'open',
                priority: 'low',
                assignee: {
                    name: 'Kunal Raj',
                    email: 'kunal.r@example.com',
                    profilelink: 'https://peerconnect.dev/users/kunalraj',
                    avatar: '',
                },
                dueDate: '2025-06-30',
            },
        ],
        detail: '<p>Provides mindfulness tools, private journals, and access to professional resources.</p>',
    },
];
