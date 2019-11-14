---
title: "AMA with Sayak Paul - Hacktoberfest'19"
date: 2019-11-13T15:14:46+05:30
draft: false
---

This year during [Hactoberfest](https://hacktoberfest.digitalocean.com/) we decided to run a month-long study group in the form a WhatsApp group. In which we also did a few AMAs.

The following is a trimmed and slightly reordered transcript of the AMA with Srijan Agarwal. If you want the full chatlog you can [access it here.](https://hacktoberfest.fossassam.tech/chatlog.txt)

About Sayak,

> Sayak is currently working with [PyImageSearch](https://www.pyimagesearch.com/), where he works on real-world deep learning problems. He was previously a data science instructor at [DataCamp](https://www.datacamp.com/). He's also a Google Developers Expert(GDE) and an Intel Software Innovator.
> Read more about his work [here](https://www.linkedin.com/in/sayak-paul/)


In this AMA Sayak shared some very practical tips and habits for beginners and shared some of his personal journey to his career in machine learning as well.

---
AMA was conducted on 2nd November 2019 from 7-8 PM.

**Legend:**

- S: Sayak
- P(n): Participants

---

**P1:** *How you introduce Data Science to students? How was your experience at Data Camp? Being a niche, where to work on?*

**S:** I will take the second question first as the first question seems to be a bit more open-ended and I would ask you to be a bit more specific. As for my experience at DataCamp, it was great.  I got to work with some really great people and the learning experience was just unreal. I thoroughly enjoyed my time there. 

*Being a niche, where to work on?*

I think it depends a lot on your interests and I always ask people to prioritize that first. Fields like Data Science and Machine Learning are inter-connected and they are really vast in their own course. So, to help yourself for not getting drowned in the vastness, it's important to sort out your interests and plan accordingly. Maybe you are interested in using Deep Learning to solve Computer Vision problems. So, you would definitely want to try working on problems pertaining to that intersection. Once you get a good hold of the fundamentals (I cannot really emphasize this enough) start by picking up problems that are relatively new but still within your range. I typically try to work on problems (pet projects) which require me to study new stuff (at least 25%-30%). This system has so far worked for me quite well :)

*How you introduce Data Science to students?*

I will try answering it briefly, though as I mentioned it's pretty open-ended. First, I try to gauge the expertise level of the students. If they are about to get started then I introduce Data Science by drawing analogies from our real lives - we use data-driven decision making all the time. Isn't it so? before going to a restaurant, we gather data about it and if we good ratings, reviews then only we go there. It's sort of an example that very elegantly establishes the idea of *data-driven decision making*.

**P2:** *I've seen many people get into ML/AI just because of its hype, how we as a community can address this? Do you have any such observations around it?*

**S:** Oh, absolutely! This is so very true. Sometimes the expectations can get really unrealistic which worries me. 

Being explorers, students, professionals (and everyone else) always try to chase what's new. So that part is really hard to be helped I think. But at the same time, as a community, we can make them more aware of the fact that Machine Learning is not just about calling *model.fit()*, there's a world (several worlds if not less) beyond that. It's important to make them understand that a not-so-detailed approach towards learning the subject only leads to misery. I think Andrej Karpathy's article [A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/) outlines this very beautifully.

**P3:** *One of the problems of our society is the dropout rate of students. The data is available in govt website, but how to employ AI/ML to solve it?*

**S:** This is an interesting idea! Unfortunately, I have not yet taken a look at the data you mentioned. But if the features in that data are descriptive enough to justify why a student is dropping out, the relationship good enough to be modeled.

**P4:** *This might be somewhat off-topic, but I've been eyeing some medical startups which are using image processing to detect skin diseases, eye problems etc. however at the end of the day, people need to go see a doc. to validate the results. Basically, they are not extremely effective. Is there any way students can work on medical data that'll be having actual impacts. More research = More mistakes = results that actually work 😛 It's almost demotivating sometimes because people in high tech labs with more precise medical equipment are working on these things already. This field seems harder to break in compared to something like saying "building an ml solution that helps students memorize something better" because the feedback loop is faster and is readily usable once it's working. How long till people are able to work on medical data much like any other data out there. Or it's already at that point and I am not aware of it.*

**S:** Great question. I will try to answer it in parts. First of all, you should definitely check out [qure](http://qure.ai/)

Indeed the field of medical imaging is progressing at a rapid pace with deep learning. I like to think of it as *Machine Learning assisted Human Tasks*. The idea here is to not really replace the doctors but to aid them in their work - accelerate their work at times. 

Regarding working on medical imaging problems, there are a few open-source datasets that are good enough to start with. But this field also requires a lot of sensitivity in terms of privacy. So that's an added challenge. Also, Healthcare data, in general, is not easily available for obvious reasons. But it's good to at least try to approach to local medical institutions and give them some direction so that they could share any data within compliance *(this can absolutely be done, I am saying this from my experience).*

**P5:** *Hey, nice to have you for the AMA, I wanted to ask your experience at PyImageSearch maybe share some problem/experience that you guys regularly deal with. Also what tips and suggestions would you have for someone aiming at a job in the Machine learning space other than project/strong basics.*

**S:** For me, a typical day at PyImageSearch can involve the following:

- *Code stuff*
- Explore a new concept/Read an interesting paper and communicate that to the team
- Put together notebooks to demo something
- Deployment of some of our deep learning projects to embedded devices like Raspberry Pi, Jetson Nano and so on
- Review PRs

*Also what tips and suggestions would you have for someone aiming at a job in the Machine learning space other than project/strong basics.*

Try to approach things from a software engineer's perspective. Learn to debug a machine learning model and believe me it takes deliberate practice.

**P6:** *What projects did you get associated at the beginning of data science. Any tips for beginners?*

**S:** Of course, I had my Titanic, Pima-Indians moments (in fact I still poke around with them when I am trying out something new). But I always tried to remain hands-on. I tried to write my own training loops and compare their performance with something already established. That enabled me to think creatively and be an effective learner. You will not find many people (beginners especially) write test cases for their machine learning models whereas it is so very important when you are out there in the wild. Also, try to read other people's code because *A code is more read than it's written* :)

**P7:** *How do you recommend, new learners especially students to plan their learning path, in terms of resources,  mindset, etc.*

**S:** I got hooked to Machine Learning when I had this subject called *Pattern Recognition and Machine Learning* in my undergrad curriculum. Fortunately or unfortunately my introduction to the field was pretty rigid and math-heavy. So, my curriculum indeed has a lot of influence on what I am today. I would say I partially self-taught.

We are currently working on a TensorFlow SIG that would deal with this very seriously. We will share the news once we have something concrete. 

Regarding the mindset, just allow yourself to be free enough to learn things in an ego-free manner. Don't be embarrassed, to be honest - learn like a child and ask questions like a pro :).