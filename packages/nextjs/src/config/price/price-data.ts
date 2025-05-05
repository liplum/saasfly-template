interface SubscriptionPlanTranslation {
  id: string
  title: string
  description: string
  benefits: string[]
  limitations: string[]
  prices: {
    monthly: number
    yearly: number
  }
}

export const priceDataMap: Record<string, SubscriptionPlanTranslation[]> = {
  zh: [
    {
      id: "starter",
      title: "入门版",
      description: "适合初学者",
      benefits: ["每月最多1个集群", "基础分析和报告", "访问基础功能"],
      limitations: [
        "无法优先获取新功能",
        "有限的客户支持",
        "无法自定义品牌",
        "对商业资源的访问受限",
      ],
      prices: {
        monthly: 0,
        yearly: 0,
      },
    },
    {
      id: "pro",
      title: "专业版",
      description: "解锁高级功能",
      benefits: [
        "每月最多3个集群",
        "高级分析和报告",
        "访问商业模板",
        "优先客户支持",
        "独家网络研讨会和培训",
      ],
      limitations: ["无法自定义品牌", "对商业资源的访问受限"],
      prices: {
        monthly: 30,
        yearly: 288,
      },
    },
    {
      id: "business",
      title: "商业版",
      description: "适合高级用户",
      benefits: [
        "每月最多10个集群",
        "实时分析和报告",
        "访问所有模板，包括自定义品牌",
        "全天候商业客户支持",
        "个性化的配置和账户管理",
      ],
      limitations: [],
      prices: {
        monthly: 60,
        yearly: 600,
      },
    },
  ],
  en: [
    {
      id: "starter",
      title: "Starter",
      description: "For Beginners",
      benefits: [
        "Up to 1 cluster per month",
        "Basic analytics and reporting",
        "Access to basic features",
      ],
      limitations: [
        "No priority access to new features",
        "Limited customer support",
        "No custom branding",
        "Limited access to business resources",
      ],
      prices: {
        monthly: 0,
        yearly: 0,
      },
    },
    {
      id: "pro",
      title: "Pro",
      description: "Unlock Advanced Features",
      benefits: [
        "Up to 3 clusters per month",
        "Advanced analytics and reporting",
        "Access to business templates",
        "Priority customer support",
        "Exclusive webinars and training",
      ],
      limitations: [
        "No custom branding",
        "Limited access to business resources",
      ],
      prices: {
        monthly: 30,
        yearly: 288,
      },
    },
    {
      id: "business",
      title: "Business",
      description: "For Power Users",
      benefits: [
        "Up to 10 clusters per month",
        "Real-time analytics and reporting",
        "Access to all templates, including custom branding",
        "24/7 business customer support",
        "Personalized configuration and account management",
      ],
      limitations: [],
      prices: {
        monthly: 60,
        yearly: 600,
      },
    },
  ],
}
