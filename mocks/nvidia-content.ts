// Type definition for NVIDIA Certification Content
export type BlueprintTopic = {
    name: string;
    percentage?: number;
    description?: string;
};

export type NvidiaCertificationContent = {
    certificationName: string;
    certificationCode: string;
    level: string;
    blueprint: BlueprintTopic[];
    requirements: string[];
    applications: string[];
};

// NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL) — Associate
export const nvidiaContentGENL: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Associate: Generative AI LLMs",
    certificationCode: "NCA-GENL",
    level: "Associate",
    blueprint: [
        {
            name: "Transformer & LLM Architecture",
            percentage: 22,
        },
        {
            name: "Prompt Engineering",
            percentage: 25,
        },
        {
            name: "Generation/Monitoring/Evaluation",
            percentage: 18,
        },
        {
            name: "Fine-Tuning",
            percentage: 15,
        },
        {
            name: "Data Curation",
            percentage: 20,
            description: "kèm mảng Trustworthy AI (including Trustworthy AI segment)",
        },
    ],
    requirements: [
        "Nắm vững kiến trúc Transformer và Large Language Models",
        "Quen thuộc với các mẫu prompt như few-shot, Chain-of-Thought (CoT), output control",
        "Hiểu về quy trình xử lý dữ liệu: collection, cleaning, tokenization",
        "Nắm vững các khái niệm về fine-tuning và đánh giá mô hình",
    ],
    applications: [
        "Khả năng viết prompts cho kết quả ổn định cho các tác vụ như Q&A, summarization, extraction, classification, và content generation",
        "Thiết kế pipeline dữ liệu cơ bản cho LLMs: collect → clean → standardize → use for fine-tuning/evaluation",
        "Biết cách thiết lập metrics và thực hiện quality checks (evaluation) để áp dụng LLMs vào các vấn đề thực tế",
    ],
};

// NVIDIA-Certified Associate: Multimodal Generative AI (NCA-GENM) — Associate
export const nvidiaContentGENM: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Associate: Multimodal Generative AI",
    certificationCode: "NCA-GENM",
    level: "Associate",
    blueprint: [
        {
            name: "Transformer Architectures",
            percentage: 18,
        },
        {
            name: "Multimodal AI Architectures",
            percentage: 16,
        },
        {
            name: "Data & Training",
            percentage: 14,
        },
        {
            name: "Prompting",
            percentage: 12,
        },
        {
            name: "Diffusion",
            percentage: 10,
        },
        {
            name: "Transfer Learning",
            percentage: 6,
        },
        {
            name: "Deployment",
            percentage: 8,
        },
        {
            name: "Evaluation",
            percentage: 8,
        },
        {
            name: "Ethics & Responsible AI",
            percentage: 8,
        },
    ],
    requirements: [
        "Nền tảng multimodal (text-image-audio/video ở mức khái niệm + pipeline)",
        "Diffusion basics",
        "Cách training/finetune & đánh giá hệ đa phương thức",
        "Kiến thức triển khai",
    ],
    applications: [
        "Xây dựng prototype text→image / image→text / multimodal Q&A theo đúng tư duy kiến trúc multimodal",
        "Biết cách đánh giá chất lượng output multimodal (không chỉ 'đẹp', mà còn 'đúng')",
    ],
};

// NVIDIA-Certified Associate: AI Infrastructure Operations (NCA-AIIO) — Associate
export const nvidiaContentAIIO: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Associate: AI Infrastructure Operations",
    certificationCode: "NCA-AIIO",
    level: "Associate",
    blueprint: [
        {
            name: "Topics covered",
            description: " NVIDIA hiện public theo dạng “Topics covered” (không hiển thị bảng % ngay trên trang), gồm: cấu hình server/network, quản trị systems & Kubernetes, vận hành workflow AI, security, monitoring, AI operations… ",
        },
    ],
    requirements: [
        "Linux/ops nền tảng (foundational Linux/operations)",
        "Container/Kubernetes căn bản (basic container/Kubernetes)",
        "Bảo mật và giám sát hệ thống (system security and monitoring)",
    ],
    applications: [
        "Đi theo hướng AI infra ops/assistant SRE: hiểu luồng vận hành từ hạ tầng → nền tảng → workload AI; biết 'đọc' và 'giữ ổn định' hệ thống",
    ],
};

// NVIDIA-Certified Professional: AI Infrastructure (NCP-AII) — Professional
export const nvidiaContentAII: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: AI Infrastructure",
    certificationCode: "NCP-AII",
    level: "Professional",
    blueprint: [
        {
            name: "System & Server Bring-up",
            percentage: 31,
        },
        {
            name: "Physical Layer Management",
            percentage: 5,
        },
        {
            name: "Control Plane Install & Config",
            percentage: 19,
        },
        {
            name: "Cluster Test & Verification",
            percentage: 33,
        },
        {
            name: "Troubleshoot & Optimize",
            percentage: 12,
        },
    ],
    requirements: [
        "Bring-up hạ tầng GPU server + network/topology AI factory, BlueField/MIG, cài BCM/OS/cluster + driver/container toolkit/NGC CLI, chạy NCCL/HPL/NeMo burn-in & test storage, tối ưu & xử lý lỗi phần cứng/hệ thống",
    ],
    applications: [
        "\"Dựng được\" một cụm AI compute từ số 0 đến kiểm định bàn giao (burn-in + bandwidth + storage test)",
        "Đủ năng lực nhận vai AI Infrastructure Engineer / DC Admin cho GPU cluster (triển khai + nghiệm thu + xử lý sự cố)",
    ],
};

// NVIDIA-Certified Professional: AI Operations (NCP-AIO) — Professional
export const nvidiaContentAIO: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: AI Operations",
    certificationCode: "NCP-AIO",
    level: "Professional",
    blueprint: [
        {
            name: "Installation & Deployment",
            percentage: 31,
        },
        {
            name: "Administration",
            percentage: 23,
        },
        {
            name: "Workload Management",
            percentage: 23,
        },
        {
            name: "Troubleshooting & Optimization",
            percentage: 23,
        },
    ],
    requirements: [
        "Vận hành cụm AI theo kiểu production: Base Command Manager (BCM), Slurm/Kubernetes/Run:ai, NGC containers, quản trị account/role, quan sát & tối ưu hiệu năng, xử lý lỗi (Docker, fabric manager, storage...)",
    ],
    applications: [
        "Vận hành \"AI factory\" theo đúng bài: deploy → schedule → quota/allocate → troubleshoot → optimize",
        "Lợi thế cực mạnh khi ứng tuyển MLOps/DevOps/SRE cho GPU cluster vì blueprint bám đúng công việc hàng ngày",
    ],
};

// NVIDIA-Certified Professional: AI Networking (NCP-AIN) — Professional
export const nvidiaContentAIN: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: AI Networking",
    certificationCode: "NCP-AIN",
    level: "Professional",
    blueprint: [
        {
            name: "AI DC Design & Optimization",
            percentage: 5,
        },
        {
            name: "NVIDIA Spectrum Networking",
            percentage: 30,
        },
        {
            name: "NVIDIA InfiniBand",
            percentage: 30,
        },
        {
            name: "Kubernetes Integration",
            percentage: 5,
        },
        {
            name: "Troubleshooting Tools",
            percentage: 20,
        },
        {
            name: "Automation & Config",
            percentage: 10,
        },
    ],
    requirements: [
        "Networking architecture for AI factory (GPU-DPU-switch), RoCE + QoS/ECN/PFC, BGP-EVPN multi-tenancy, InfiniBand (PKeys/QoS/adaptive routing/UFM), Kubernetes network operator, debug tools (WJH/NetQ/UFM/ib_*), automation using Ansible/NVUE templates",
    ],
    applications: [
        "Thiết kế + cấu hình + vận hành mạng hiệu năng cao cho training/inference (chạm đúng \"nút thắt\" throughput/latency)",
        "Nhảy thẳng vào job AI Network Engineer / DC Networking cho GPU (mảng đang rất thiếu người)",
    ],
};

// NVIDIA-Certified Professional: Accelerated Data Science (NCP-ADS) — Professional
export const nvidiaContentADS: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: Accelerated Data Science",
    certificationCode: "NCP-ADS",
    level: "Professional",
    blueprint: [
        {
            name: "Data analysis",
            percentage: 14,
        },
        {
            name: "Data manipulation & software literacy",
            percentage: 19,
        },
        {
            name: "Data preparation",
            percentage: 17,
        },
        {
            name: "GPU & cloud computing",
            percentage: 16,
        },
        {
            name: "Machine learning",
            percentage: 15,
        },
        {
            name: "MLOps",
            percentage: 19,
        },
    ],
    requirements: [
        "EDA/time-series/graph (cuGraph), ETL/accelerated pipelines, Dask multi-GPU scaling, profiling (DLProf), cuDF+pandas prep, Docker/Conda, benchmarking, training ML single/multi GPU, triển khai & giám sát production (MLOps)",
    ],
    applications: [
        "Làm được end-to-end pipeline: ingest → prep → train → benchmark → deploy/monitor, với tư duy \"GPU-first\"",
        "Tạo lợi thế tuyển dụng cho Data Scientist/ML Engineer ở môi trường dữ liệu lớn, cần tối ưu tốc độ/chi phí",
    ],
};

// NVIDIA-Certified Professional: OpenUSD Development (NCP-OUSD) — Professional
export const nvidiaContentOUSD: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: OpenUSD Development",
    certificationCode: "NCP-OUSD",
    level: "Professional",
    blueprint: [
        {
            name: "Composition",
            percentage: 23,
        },
        {
            name: "Content Aggregation",
            percentage: 10,
        },
        {
            name: "Customizing USD",
            percentage: 6,
        },
        {
            name: "Data Exchange",
            percentage: 15,
        },
        {
            name: "Data Modeling",
            percentage: 13,
        },
        {
            name: "Debugging & Troubleshooting",
            percentage: 11,
        },
        {
            name: "Pipeline Development",
            percentage: 14,
        },
        {
            name: "Visualization",
            percentage: 8,
        },
    ],
    requirements: [
        "OpenUSD + Python/C++ (thường 2-3 năm hoặc tương đương), composition arcs, mô hình dữ liệu USD (Usd/Sdf, prims, attributes...), plugin/schema, interchange pipelines, debug tối ưu load/render, pipeline/versioning/collab",
    ],
    applications: [
        "Build & vận hành 3D content pipeline chuẩn công nghiệp (asset structuring, composition, interchange, tooling)",
        "Đi vào các job: Pipeline Engineer / USD Developer / 3D Data Engineer (digital twin, simulation, media, robotics...)",
    ],
};

// NVIDIA-Certified Professional: Generative AI LLMs (NCP-GENL) — Professional
export const nvidiaContentGENLPro: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: Generative AI LLMs",
    certificationCode: "NCP-GENL",
    level: "Professional",
    blueprint: [
        {
            name: "LLM Architecture",
            percentage: 6,
        },
        {
            name: "Prompt Engineering",
            percentage: 13,
        },
        {
            name: "Data Preparation",
            percentage: 9,
        },
        {
            name: "Model Optimization",
            percentage: 17,
        },
        {
            name: "Fine-Tuning",
            percentage: 13,
        },
        {
            name: "Evaluation",
            percentage: 7,
        },
        {
            name: "GPU Acceleration & Optimization",
            percentage: 14,
        },
        {
            name: "Model Deployment",
            percentage: 9,
        },
        {
            name: "Production Monitoring & Reliability",
            percentage: 7,
        },
        {
            name: "Safety/Ethics/Compliance",
            percentage: 5,
        },
    ],
    requirements: [
        "Không chỉ \"prompt\", mà cả lifecycle production: chuẩn bị dữ liệu, fine-tune, tối ưu GPU & distributed, triển khai (serving/orchestration), giám sát reliability, đánh giá + responsible AI",
    ],
    applications: [
        "Build LLM solution theo chuẩn enterprise: tối ưu chi phí/latency, monitoring, guardrails, re-eval theo version",
        "Lợi thế tuyển dụng rõ rệt cho LLM Engineer / GenAI Engineer / Applied ML vì blueprint \"đúng việc production\"",
    ],
};

// NVIDIA-Certified Professional: Agentic AI LLMs (NCP-AAI) — Professional
export const nvidiaContentAAI: NvidiaCertificationContent = {
    certificationName: "NVIDIA-Certified Professional: Agentic AI LLMs",
    certificationCode: "NCP-AAI",
    level: "Professional",
    blueprint: [
        {
            name: "Agent Architecture & Design",
            percentage: 15,
        },
        {
            name: "Agent Development",
            percentage: 15,
        },
        {
            name: "Evaluation & Tuning",
            percentage: 13,
        },
        {
            name: "Deployment & Scaling",
            percentage: 13,
        },
        {
            name: "Cognition/Planning/Memory",
            percentage: 10,
        },
        {
            name: "Knowledge Integration & Data Handling",
            percentage: 10,
        },
        {
            name: "NVIDIA Platform Implementation",
            percentage: 7,
        },
        {
            name: "Run/Monitor/Maintain",
            percentage: 5,
        },
        {
            name: "Safety/Ethics/Compliance",
            percentage: 5,
        },
        {
            name: "Human-AI Interaction & Oversight",
            percentage: 5,
        },
    ],
    requirements: [
        "Thiết kế agent (reasoning/planning/memory), multi-agent orchestration, RAG/knowledge integration, evaluation (offline/online), deploy & scale, vận hành/giám sát, và human-in-the-loop + compliance",
    ],
    applications: [
        "Làm ra \"AI agent chạy được\" chứ không chỉ demo: RAG agent, tool-using agent, workflow multi-agent, có eval + monitoring",
        "Đi vào các vai trò hot: Agentic AI Engineer / RAG Engineer / Applied GenAI",
    ],
};

// Export all certifications as an array
export const nvidiaContentList: NvidiaCertificationContent[] = [
    nvidiaContentAIIO,
    nvidiaContentAII,
    nvidiaContentAIO,
    nvidiaContentAIN,
    nvidiaContentGENL,
    nvidiaContentGENM,

    nvidiaContentGENLPro,
    nvidiaContentAAI,
    nvidiaContentADS,
    nvidiaContentOUSD,



];

// Default export (backward compatibility - first certification)
export const nvidiaContent = nvidiaContentGENL;



export const nvidiaBenefit = {
    "title": "Những lợi ích vượt trội khi sở hữu chứng chỉ NVIDIA",
    "benefits": [
        {
            "key": "recruitment_advantage",
            "title": "Lợi thế khi tham gia tuyển dụng và cơ hội nghề nghiệp",
            "description": "Gia tăng khả năng cạnh tranh khi ứng tuyển vào các vị trí liên quan đến AI và công nghệ cao."
        },
        {
            "key": "portfolio",
            "title": "Tạo portfolio nổi bật",
            "description": "Chứng chỉ NVIDIA giúp hồ sơ ứng viên thể hiện rõ năng lực chuyên môn, phù hợp với các tiêu chí sàng lọc tự động và quy trình tuyển dụng hiện đại của doanh nghiệp công nghệ."
        },
        {
            "key": "international_ai_engineer",
            "title": "Cơ hội trở thành kỹ sư AI chuẩn quốc tế",
            "description": "Học viên có năng lực triển khai và vận hành các hệ thống AI theo chuẩn NVIDIA trong các mảng như LLM, Multimodal, AI Operations, hạ tầng AI/GPU, phù hợp với môi trường doanh nghiệp công nghệ."
        },
        {
            "key": "career_positions",
            "title": "Đầu ra nhiều vị trí nghề nghiệp",
            "description": "Đủ kiến thức và năng lực để ứng tuyển vào các vai trò như AI Engineer, Machine Learning Engineer, AI Operations Engineer, AI Infrastructure Engineer, tùy theo cấp độ chứng chỉ và kinh nghiệm."
        },
        {
            "key": "enterprise_opportunities",
            "title": "Cơ hội làm việc tại doanh nghiệp công nghệ trong và ngoài nước",
            "description": "Phù hợp với các tập đoàn và đơn vị công nghệ như FPT, Viettel, VNPT, các công ty phần mềm, startup AI, trung tâm R&D, cũng như các doanh nghiệp có nhu cầu ứng dụng AI vào vận hành."
        }
    ],
    "income": {
        "title": "Thu nhập cạnh tranh theo mặt bằng thị trường",
        "levels": [
            {
                "level": "Fresher / Sinh viên mới ra trường",
                "position": "Fresher AI Engineer",
                "salary_vnd_per_month": "15 – 30 triệu"
            },
            {
                "level": "Mid-level",
                "experience": "2–3 năm",
                "position": "AI Engineer",
                "salary_vnd_per_month": "30 – 60 triệu"
            },
            {
                "level": "Senior",
                "position": "Senior AI Engineer / AI Infrastructure / AI Ops",
                "salary_vnd_per_month": "60 triệu+",
                "note": "Tùy năng lực và doanh nghiệp"
            }
        ]
    }
}
