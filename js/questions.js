window.QUIZ_QUESTIONS = [
  // 01-35：7个底层能力，每项5题。题目交错呈现，不显示维度名称。
  {id:1,dimension:'E',type:'scale',text:'别人说“没事”，但语气和平时明显不一样时，我通常会注意到这个变化。'},
  {id:2,dimension:'A',type:'scale',text:'重要场合前，我会根据要见的人和要做的事，调整自己的穿着、状态或表达方式。'},
  {id:3,dimension:'S',type:'scale',text:'刚进入一个陌生群体时，我通常能比较快看出哪些人彼此熟悉、谁比较有影响力。'},
  {id:4,dimension:'W',type:'scale',text:'面对一件要求还不完全清楚的事，我通常能先找出第一步，而不是一直等条件齐全。'},
  {id:5,dimension:'C',type:'scale',text:'看到和自己条件接近的人明显取得进展时，我会重新想想自己是不是也可以争取更多。'},
  {id:6,dimension:'R',type:'scale',text:'做重要选择时，我会想：这件事真正成立，需要哪些关键条件？'},
  {id:7,dimension:'L',type:'scale',text:'开始一件新事情前，我会先看看有没有现成的工具、平台、信息或经验可以利用。'},

  {id:8,dimension:'E',type:'scale',text:'出现分歧时，我常能分辨对方是在反对事情本身，还是更在意被忽视、被否定或失去控制感。'},
  {id:9,dimension:'A',type:'scale',reverse:true,text:'只要内容本身没问题，我通常不会太在意头像、公开主页、作品展示或个人形象是不是已经过时。'},
  {id:10,dimension:'S',type:'scale',text:'认识一个聊得来或以后可能互相帮助的人后，我通常不会完全等对方再次联系我。'},
  {id:11,dimension:'W',type:'scale',reverse:true,text:'如果一件重要的事没有明确截止日期，我很容易一直往后拖。'},
  {id:12,dimension:'C',type:'scale',text:'两个选择眼下差不多时，我会明显在意哪个能让我未来拥有更多选择。'},
  {id:13,dimension:'R',type:'scale',reverse:true,text:'当身边大多数我信任的人都看好一个机会时，我通常不会再花很多时间建立自己的判断。'},
  {id:14,dimension:'L',type:'scale',reverse:true,text:'遇到需要合作的事情时，我常觉得沟通太麻烦，自己做反而更省事。'},

  {id:15,dimension:'E',type:'scale',reverse:true,text:'我有时会到事情结束以后，才意识到某个人当时其实已经明显不舒服或被冷落了。'},
  {id:16,dimension:'A',type:'scale',text:'进入一个自己不熟悉的环境前，我会先观察这里的人通常怎样穿、怎样表达，再决定自己要不要调整。'},
  {id:17,dimension:'S',type:'scale',reverse:true,text:'和一个人很久没联系后，即使现在有合理的事情想请教，我也常因为尴尬而放弃联系。'},
  {id:18,dimension:'W',type:'scale',text:'几件事同时出现时，我通常会先确定最重要的一个结果，再安排其他事情。'},
  {id:19,dimension:'C',type:'scale',reverse:true,text:'如果目前的生活已经还不错，我通常不会太主动去争取更高难度、更大影响力或更稀缺的机会。'},
  {id:20,dimension:'R',type:'scale',text:'看到别人很成功时，我更想知道他的起点、时机和关键条件，而不是直接照着他的做法学。'},
  {id:21,dimension:'L',type:'scale',text:'如果一个工具、课程、服务或合作能稳定节省大量时间，只要回报合理，我愿意用资源换效率。'},

  {id:22,dimension:'E',type:'scale',text:'同一句话面对不同的人，我会自然调整说法，因为我会在意对方怎样理解。'},
  {id:23,dimension:'A',type:'scale',reverse:true,text:'我很少思考别人第一眼会怎样感受我，也不太会为了不同场合调整自己的呈现。'},
  {id:24,dimension:'S',type:'scale',text:'遇到一个自己解决起来很慢的问题时，我脑子里通常能想到几位“也许可以问一下”的人。'},
  {id:25,dimension:'W',type:'scale',reverse:true,text:'我经常会对新想法很兴奋，但真正做到可以交付、展示或完成的比例没有那么高。'},
  {id:26,dimension:'C',type:'scale',text:'如果我确认当前环境已经很难让我继续成长，我会认真准备进入下一个阶段，而不是一直停着。'},
  {id:27,dimension:'R',type:'scale',text:'面对一个看起来不错的选择，我通常也会想：选了它以后，我会失去哪些时间和其他可能性？'},
  {id:28,dimension:'L',type:'scale',text:'如果两个人合作明显比各自单独做更好，我愿意重新讨论分工、回报和合作方式。'},

  {id:29,dimension:'E',type:'scale',text:'需要说一件可能让人不舒服的事时，我会考虑什么时候说、怎么说，而不只考虑内容对不对。'},
  {id:30,dimension:'A',type:'scale',text:'如果某项外在投入能长期改善我的状态、可信度或第一印象，我会把它当成值得管理的一部分。'},
  {id:31,dimension:'S',type:'scale',reverse:true,text:'即使认识合适的人，我也常因为不想欠人情，而避免请对方介绍、推荐或牵线。'},
  {id:32,dimension:'W',type:'scale',text:'一件事结果不理想后，我通常会改掉下一次流程里的至少一个具体环节。'},
  {id:33,dimension:'C',type:'scale',text:'面对一个自己真的想要的名额、合作、机会或资源时，只要条件够，我通常愿意明确表达自己的意愿。'},
  {id:34,dimension:'R',type:'scale',text:'规则或信息很多时，我会尝试找出真正影响结果的两三个变量，而不是平均用力。'},
  {id:35,dimension:'L',type:'scale',reverse:true,text:'即使我知道某个人、平台或工具可能帮得上忙，我也常拖到自己实在解决不了才会去用。'},

  // 36-44：强制选择。A/B方向交错，降低受试者猜测结果的可能。
  {id:36,type:'binary',weight:2,mOption:'A',text:'如果一件重要的事只能选一种参与方式，你更愿意：',a:'负责最关键、最能直接证明个人能力的部分。',b:'把合适的人和资源连接起来，让整件事更顺利。'},
  {id:37,type:'binary',weight:1,mOption:'B',text:'进入一个新的高质量环境后，你更希望别人记住你的是：',a:'和你相处舒服、愿意继续认识你，也愿意把你介绍给别人。',b:'你很靠谱、判断不错，遇到重要问题可以找你。'},
  {id:38,type:'binary',weight:2,mOption:'B',text:'遇到一个明显比自己强的人时，你更可能先：',a:'换一个更适合自己的位置或打法，不一定正面比同一件事。',b:'找出最大的差距，把关键能力练到能直接比较。'},
  {id:39,type:'binary',weight:2,mOption:'A',text:'假设三年后只能看到一种明显变化，你更希望：',a:'自己的能力、收入来源、成果或可支配资源明显上了一个台阶。',b:'自己接触的人、生活环境和获得机会的质量明显上了一个台阶。'},
  {id:40,type:'binary',weight:2,mOption:'B',text:'如果突然去一个完全陌生的地方重新开始，你更希望先拥有：',a:'很快建立可信关系、获得信息和支持的能力。',b:'不依赖熟人也能靠自己创造价值的能力。'},
  {id:41,type:'binary',weight:2,mOption:'B',text:'一个稀缺机会需要别人认可你，你更想先准备：',a:'让关键的人更了解我、信任我，并愿意支持我。',b:'拿出足够硬的成果，让“为什么是我”很容易回答。'},
  {id:42,type:'binary',weight:3,mOption:'B',text:'面对一个名额很少、很多人都想要的机会，你更倾向：',a:'先理解谁在做决定，以及怎样提高自己被优先考虑的概率。',b:'把评价标准弄清楚，然后尽量在关键标准上做到更强。'},
  {id:43,type:'binary',weight:2,mOption:'A',text:'哪一种状态会让你更有安全感？',a:'即使环境和关系变化，我仍能凭自己的能力重新站住。',b:'即使环境变化，我也能很快重新建立关系和支持网络。'},
  {id:44,type:'binary',weight:2,mOption:'A',text:'如果只能长期建立一种别人很难拿走的优势，你更想要：',a:'一套可迁移的能力、作品、成果或资产，到哪里都能创造价值。',b:'稳定的综合吸引力和关系价值，让优质的人与机会更愿意靠近我。'},

  // 45-48：校准题，用来区分独立性、现实回报、双轨发展与借力意愿。
  {id:45,dimension:'K45',type:'scale',text:'即使没有人知道，我也愿意把时间投入到以后换环境仍然能带走的能力上。'},
  {id:46,dimension:'K46',type:'scale',text:'如果一件事长期看不到成长、现实回报或重要体验，我会重新评估，而不是因为已经投入很多就继续。'},
  {id:47,dimension:'K47',type:'scale',text:'我既希望自己真的有能力，也希望在关键场合别人能够准确感知到这种能力。'},
  {id:48,dimension:'K48',type:'scale',text:'只要效果和风险相近，我更愿意采用省时间、可复制的方法，而不是为了证明自己亲自完成每一步。'}
];
