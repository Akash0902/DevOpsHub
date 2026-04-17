export type Topic = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: string;
  summary: string;
  keyPoints: string[];
  videos: { title: string; channel: string; youtubeId: string }[];
};
export const topics: Topic[] = [
  {
    slug: "linux",
    title: "Linux & Shell",
    level: "Beginner",
    icon: " ",
    summary:
      "Linux powers ~96% of servers. The shell is the universal interface for every DevOps tool.",
    keyPoints: [
      "Filesystem layout: /etc, /var, /usr, /proc",
      "Permissions: chmod, chown, sudo",
      "Processes: ps, top, systemd / systemctl",
      "Networking: ip, ss, curl, dig",
      "Text tools: grep, awk, sed, jq",
    ],
    videos: [
      { title: "Linux for DevOps Engineers (Full Course)", channel: "TechWorld w/ Nana", youtubeId: "Wgi-OfbP2Gw" },
      { title: "Linux Crash Course for Beginners", channel: "NetworkChuck", youtubeId: "ROjZy1WbCIA" },
      { title: "Bash Scripting Full Course", channel: "freeCodeCamp", youtubeId: "tK9Oc6AEnR4" },
    ],
  },
  {
    slug: "git",
    title: "Git & Version Control",
    level: "Beginner",
    icon: " ",
    summary:
      "Git tracks every change, powers code review, and triggers CI/CD pipelines.",
    keyPoints: [
      "Working dir → Staging → Local → Remote",
      "Branching strategies: trunk-based vs Git Flow",
      "Merging vs Rebasing",
      "Pull requests & code review",
      "git stash, reset, revert, reflog",
    ],
    videos: [
      { title: "Git & GitHub Crash Course", channel: "Traversy Media", youtubeId: "SWYqp7iY_Tc" },
      { title: "Git Tutorial for Beginners", channel: "TechWorld w/ Nana", youtubeId: "DVRQoVRzMIY" },
      { title: "Advanced Git Tutorial", channel: "The Net Ninja", youtubeId: "qsTthZi23VE" },
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    level: "Beginner",
    icon: " ",
    summary:
      "You can't debug production without understanding how packets flow.",
    keyPoints: [
      "OSI / TCP-IP layers — L4 and L7",
      "IP, CIDR, NAT, public vs private",
      "DNS records: A, CNAME, MX, TXT",
      "HTTP/HTTPS, status codes, TLS",
      "Load balancers, firewalls, VPC",
    ],
    videos: [
      { title: "Networking Fundamentals", channel: "NetworkChuck", youtubeId: "qiQR5rTSshw" },
      { title: "DNS Explained", channel: "PowerCert", youtubeId: "mpQZVYPuDGU" },
      { title: "HTTP Crash Course", channel: "Traversy Media", youtubeId: "iYM2zFP3Zn0" },
    ],
  },
  {
    slug: "cicd",
    title: "CI/CD",
    level: "Intermediate",
    icon: " ",
    summary:
      "Continuous Integration & Delivery automate build, test, and ship. The heart of DevOps.",
    keyPoints: [
      "CI: build + test on every commit",
      "CD: every passing build is deployable / deployed",
      "Pipeline: lint → test → build → scan → deploy",
      "Tools: GitHub Actions, GitLab CI, Jenkins, Argo CD",
      "Blue/green & canary deployments",
    ],
    videos: [
      { title: "CI/CD Explained", channel: "TechWorld w/ Nana", youtubeId: "scEDHsr3APg" },
      { title: "GitHub Actions Tutorial", channel: "freeCodeCamp", youtubeId: "R8_veQiYBjI" },
      { title: "Jenkins Full Course", channel: "Simplilearn", youtubeId: "FX322RVNGj4" },
    ],
  },
  {
    slug: "docker",
    title: "Docker & Containers",
    level: "Intermediate",
    icon: " ",
    summary:
      "Containers package an app with all dependencies into a single, portable artifact.",
    keyPoints: [
      "Image vs container vs registry",
      "Dockerfile best practices (multi-stage)",
      "Volumes, networks, docker-compose",
      "Image size & security scanning",
      "Push to ECR / GHCR / Docker Hub",
    ],
    videos: [
      { title: "Docker Tutorial for Beginners", channel: "TechWorld w/ Nana", youtubeId: "3c-iBn73dDE" },
      { title: "Docker Crash Course", channel: "Traversy Media", youtubeId: "pTFZFxd4hOI" },
      { title: "Docker & Kubernetes Full Course", channel: "freeCodeCamp", youtubeId: "bhBSlnQcq2k" },
    ],
  },
  {
    slug: "kubernetes",
    title: "Kubernetes",
    level: "Advanced",
    icon: "
",
    summary:
      "K8s orchestrates containers across machines — self-healing, scaling, rolling updates.",
    keyPoints: [
      "Pods, Deployments, Services, Ingress",
      "ConfigMaps & Secrets",
      "StatefulSets, DaemonSets, Jobs",
      "kubectl mastery",
      "Helm for packaging",
    ],
    videos: [
      { title: "Kubernetes Tutorial for Beginners", channel: "TechWorld w/ Nana", youtubeId: "X48VuDVv0do" },
      { title: "Kubernetes Course", channel: "freeCodeCamp", youtubeId: "d6WC5n9G_sM" },
      { title: "Kubernetes The Hard Way", channel: "Kelsey Hightower walk", youtubeId: "Sa6UBrQVlgI" },
    ],
  },
  {
    slug: "iac",
    title: "Terraform & Ansible (IaC)",
    level: "Intermediate",
",
    icon: "
    summary:
      "Infrastructure as Code: define infra in versioned, reviewable code. No more clicking consoles.",
    keyPoints: [
      "Terraform: declarative provisioning (HCL)",
      "State file & remote backends",
      "init → plan → apply workflow",
      "Ansible: agentless config management over SSH",
      "Playbooks, inventories, roles",
    ],
    videos: [
      { title: "Terraform Course", channel: "freeCodeCamp", youtubeId: "SLB_c_ayRMo" },
      { title: "Terraform Explained", channel: "TechWorld w/ Nana", youtubeId: "l5k1ai_GBDE" },
      { title: "Ansible Full Course", channel: "Simplilearn", youtubeId: "9Ua2b06oAr4" },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud (AWS / Azure / GCP)",
    level: "Intermediate",
    icon: "
",
    summary:
      "Cloud is where modern DevOps lives. Master one — concepts transfer to the others.",
    keyPoints: [
      "Compute: EC2 / VM / Compute Engine",
      "Containers: ECS-EKS / AKS / GKE",
      "Serverless: Lambda / Functions",
      "Storage: S3 / Blob / Cloud Storage",
      "IAM & least-privilege",
    ],
    videos: [
      { title: "AWS Cloud Practitioner Course", channel: "freeCodeCamp", youtubeId: "SOTamWNgDKc" },
      { title: "Azure Fundamentals AZ-900", channel: "Adam Marczak", youtubeId: "NKEFWyqJ5XA" },
      { title: "GCP Tutorial", channel: "TechWorld w/ Nana", youtubeId: "4D3X6Xl5c_Y" },
    ],
  },
  {
    slug: "monitoring",
    title: "Monitoring & Observability",
    level: "Intermediate",
    icon: " ",
    summary:
      "You can't fix what you can't see. Observability = metrics + logs + traces.",
    keyPoints: [
      "Three pillars: metrics, logs, traces",
      "Prometheus + Grafana stack",
      "ELK / Loki for logs",
      "Jaeger / OpenTelemetry for tracing",
      "SLI / SLO / SLA & error budgets",
    ],
    videos: [
      { title: "Prometheus + Grafana Tutorial", channel: "TechWorld w/ Nana", youtubeId: "h4Sl21AKiDg" },
      { title: "Observability Explained", channel: "Honeycomb", youtubeId: "CMZqKLNRpcI" },
      { title: "SRE Fundamentals", channel: "Google Cloud Tech", youtubeId: "uTEL8Ff1Zvk" },
    ],
  },
  {
    slug: "devsecops",
    title: "DevSecOps",
    level: "Advanced",
    icon: "
",
    summary:
      "Shift security left — catch issues during development, not after deployment.",
    keyPoints: [
      "SAST, DAST, SCA scanning",
      "Container scanning (Trivy, Grype)",
      "IaC scanning (tfsec, Checkov)",
      "Secret management (Vault, AWS SM)",
      "Least-privilege IAM, encryption",
    ],
    videos: [
      { title: "DevSecOps Explained", channel: "IBM Technology", youtubeId: "7nqQfNAA1Bg" },
      { title: "HashiCorp Vault Tutorial", channel: "TechWorld w/ Nana", youtubeId: "oTPLAQtqfTU" },
      { title: "OWASP Top 10", channel: "freeCodeCamp", youtubeId: "avFR_Af0KGk" },
    ],
  },
];
export type Cert = {
  name: string;
  vendor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  why: string;
  url: string;
};
export const certifications: Cert[] = [
  { name: "AWS Cloud Practitioner", vendor: "AWS", level: "Beginner", price: "$100", why: "Best entry point to AWS — broad overview.", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
  { name: "Azure AZ-900 Fundamentals", vendor: "Microsoft", level: "Beginner", price: "$99", why: "Entry-level Azure certification.", url: "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/" },
  { name: "Terraform Associate", vendor: "HashiCorp", level: "Beginner", price: "$70.50", why: "Cheapest cert with massive ROI for IaC roles.", url: "https://www.hashicorp.com/certification/terraform-associate" },
  { name: "GitHub Actions Certification", vendor: "GitHub", level: "Beginner", price: "$99", why: "CI/CD-focused, growing demand.", url: "https://resources.github.com/learn/certifications/" },
  { name: "AWS Solutions Architect Associate", vendor: "AWS", level: "Intermediate", price: "$150", why: "Most in-demand AWS certification.", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
  { name: "CKA — Certified Kubernetes Administrator", vendor: "CNCF / Linux Foundation", level: "Intermediate", price: "$395", why: "Hands-on K8s — highly respected.", url: "https://www.cncf.io/certification/cka/" },
  { name: "CKAD — Certified Kubernetes App Developer", vendor: "CNCF / Linux Foundation", level: "Intermediate", price: "$395", why: "Dev-focused Kubernetes cert.", url: "https://www.cncf.io/certification/ckad/" },
  { name: "Docker Certified Associate", vendor: "Docker", level: "Intermediate", price: "$195", why: "Container fundamentals validated.", url: "https://docker.com/certification/" },
  { name: "Linux Foundation LFCS", vendor: "Linux Foundation", level: "Intermediate", price: "$395", why: "Vendor-neutral Linux admin cert.", url: "https://www.cncf.io/certification/lfcs/" },
  { name: "AWS DevOps Engineer Pro", vendor: "AWS", level: "Advanced", price: "$300", why: "CI/CD + IaC focus on AWS.", url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" },
  { name: "Azure AZ-400 DevOps Expert", vendor: "Microsoft", level: "Advanced", price: "$165", why: "Azure DevOps + GitHub mastery.", url: "https://learn.microsoft.com/credentials/certifications/devops-engineer/" },
  { name: "Google Professional Cloud DevOps Engineer", vendor: "Google Cloud", level: "Advanced", price: "$200", why: "SRE-flavored GCP DevOps cert.", url: "https://cloud.google.com/certification/cloud-devops-engineer" },
  { name: "RHCE — Red Hat Certified Engineer", vendor: "Red Hat", level: "Advanced", price: "$400", why: "Linux + Ansible automation depth.", url: "https://www.redhat.com/services/certification/rhce" },
];
export const roadmap = [
  { month: "Month 1", title: "Foundations", items: ["Linux & bash", "Git workflow", "Networking basics", "Python or Go"] },
  { month: "Month 2", title: "Containers & CI/CD", items: ["Docker & Compose", "GitHub Actions", "Build a CI pipeline"] },
  { month: "Month 3", title: "Cloud", items: ["Pick AWS/Azure/GCP", "Compute, storage, IAM", "Earn foundational cert"] },
  { month: "Month 4", title: "Orchestration & IaC", items: ["Kubernetes basics", "Terraform real infra", "Ansible config"] },
  { month: "Month 5", title: "Observability & Security", items: ["Prometheus + Grafana", "Centralized logging", "Trivy, Snyk scans"] },
  { month: "Month 6", title: "Portfolio", items: ["End-to-end project", "Document on GitHub", "Apply & interview"] },
];
