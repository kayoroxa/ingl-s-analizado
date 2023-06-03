const sentenceSimilarity = require('./sentenceSimilarity')

function sortBySimilarity(frases, blockPercent = 0.7) {
  let restantes = frases.slice(1)
  const frasesOrdenadas = [frases[0]]

  let loop = true

  while (loop) {
    const targetSentence = frasesOrdenadas.slice(-1)[0]
    const similaridades = sentenceSimilarity(targetSentence, restantes)

    const findIndex = similaridades.findIndex(
      similar => similar.score < blockPercent
    )

    const find = similaridades[findIndex]

    if (!find?.sentence) {
      loop = false
    } else {
      restantes = restantes.filter(
        sentence =>
          !similaridades
            .slice(0, findIndex + 1)
            .find(s => s.sentence === sentence)
      )

      // if (similaridades[0].score > blockPercent) continue
      frasesOrdenadas.push(find.sentence)
    }
  }

  return frasesOrdenadas
}

const sentences = `
I don't feel like going out.
I feel like going out.      
I can't help doing that.    
Thank you for calling.      
Nice talking with you.      
I don't mind waiting.       
I will stop him from going. 
He didn't stop talking.     
Will you stop talking?      
How about calling it a day?
Why do you keep avoiding me?
Let me do the talking.
Do you enjoy talking?
I didn't get the meaning.
Thank you for seeing me off.
It doesn't have any meaning.
I have a bad feeling.
Can he keep it going?
Don't keep me waiting.
I love working with people.
I like working with you.
Just let me do the talking.
Did you have a nice evening?
Will you stop saying that?
I don't mind helping.
I just feel like relaxing.
We need to get going.
She can't stop talking.
I love talking to you.
I appreciate your telling me.
I appreciate you calling me.
What you said has no meaning.
I don't want you doing that.
I don't feel like doing it.
I don't feel like working.
I feel like seeing you.
I like talking to you.
I've got to get going.
You need to stop saying that.
Can you stop calling me that?
I'll call you in the evening.
What do you feel like doing?
You should stop doing that.
I need you to stop talking.
I really have to get going.
Didn't you feel like going?
Didn't you hear me calling?
Do you plan on using that?
I don't feel like talking.
I didn't like the feeling.
I enjoy talking with you.
Thank you for calling me.
Thanks for helping out.
I hate waiting in line.
Thanks for helping me.
Thanks for calling me.
I don't like waiting.
I enjoy working here.
I have to keep going.
You should get going.
I don't like waiting in line.
I can't tell just by looking.
Thank you for helping me out.
Thanks very much for waiting.
Can you stop talking please?
Please stop calling me that.
We should get going on that.
We really need to get going.
How do you plan on doing it?
Thank you for talking to me.
I didn't plan on doing that.
Could you stop saying that?
Thanks for calling me back.
Stop telling me what to do.
I really need to get going.
We should really get going.
I don't plan on doing that.
Thanks for telling me that.
Would you stop saying that?
Thanks for telling us that.
Please stop looking at me.
Would you mind helping us?
Do you like going to work?
Thank you for the evening.
I had no problem doing it.
Thanks for waiting for me.
Would you mind helping me?
Thanks for not telling me.
Would you stop doing that?
Sorry to keep you waiting.
I didn't feel like going.
I like talking to people.
Well, I should get going.
Do you like working here?
Thank you for helping me.
Thank you for telling me.
Thanks for talking to me.
Thanks for seeing me off.
I love talking to people.
Why did you stop talking?
I had to stop doing that.
Thank you for seeing me.
Please stop saying that.
Thank you for seeing us.
I'll do all the talking.
Thanks for calling back.
Stop doing that, please.
Stop talking about that.
Can you stop doing that?
Why don't we get going?
Stop talking like that.
I don't mind doing it.
Thanks for telling me.
Thanks for doing that.
Thank you for waiting.
Thanks for seeing me.
Stop looking at me like that.
I appreciate you telling me.
I like helping people.
Thank you for caring.
I like your thinking.
I don't like working here.
I don't like working out.
I didn't like doing that.
What do you enjoy doing?
I really like that feeling.
I know that feeling, too.
We have to keep going.
So, should we get going?
I just like helping out.
Thanks for helping me out.
I really love working out.
We have to keep working.
What a nice looking car!
I want to keep working here.
I have to keep on working.
I don't want to stop working.
I didn't feel like going out.
I don't mind doing it at all.
I just have to keep working.
I don't enjoy doing that.
I really like helping people.
I don't like waiting for you.
I keep thinking about you.
We can't keep doing that.
I should get going now.
I didn't enjoy doing that.
I love helping people.
I've got to keep going.
I love helping people out.
We want to keep going.
You have to keep going.
I hate doing all of that.
We want to keep going now.
We have to keep going now.
We just want to keep going.
We just have to keep going.
We have to keep it going now.
I had a good feeling.
I have a good feeling.
We just have to keep looking.
How do you plan on helping?
I didn't plan on helping.
I didn't mind helping at all.
I don't mind doing that.
Stop thinking about it.
I don't like doing that.
I plan on doing that.
You never stop talking.
You can't keep doing that.
Why do you like working here?
Why did you stop doing that?
Thanks for always helping me.
Thank you for doing that.
I still like doing that.
I plan on going there.
I had no problem doing that.
I didn't mind doing that.
Don't you hate doing that?
Do you plan on doing that?
Do you like doing that?
Do you enjoy doing that?
Did you enjoy doing that?
You need to stop doing that.
Would you mind doing that?
Why do you like doing that?
We'll keep doing that.
Stop doing that right now.
Please stop doing that.
I've got to stop doing that.
I'll keep doing that.
I want to see you doing that.
I should stop doing that.
I know that feeling well.
I have to stop doing that.
I feel like doing that.
I don't like doing that here.
I don't feel like doing that.
I didn't get rich doing that.
I didn't feel like waiting.
I didn't feel like talking.
I avoid doing that if I can.
How do you like doing that?
How about doing that again?
You plan on going, don't you?
Where do you plan on going?
When do you plan on going?
I still plan on doing that.
I hate waiting for people.
I don't feel like waiting.
Stop telling me to calm down.
Stop calling me that.
How about doing that now?
What do you plan on doing?
I need some help doing that.
I had a good time doing that.
I can't stop looking at you.
I feel like going home.
You need to get going.
I don't mind waiting for you.
I had help doing that.
Who did you see doing that?
Don't keep us waiting.
Stop talking about work.
Thank you for helping.
I don't mind helping you.
I'll stop calling you that.
I'll let you do the talking.
Do you plan on going again?
I didn't mind waiting.
Do you enjoy working here?
Do you need help doing that?
I like doing that as well.
I really love doing that.
I don't have all evening.
Stop telling us what to do.
Do you work in the evening?
I do love doing that.
Will doing that help?
I'll do all of the talking.
Thank you for helping us.
I had to do all the talking.
Let me do all of the talking.
I like your way of thinking.
I just don't like doing that.
I don't mind telling you.
Thanks for saying so.
I have no way of knowing.
I want you to stop talking.
Why do you enjoy doing that?
I need help doing that.
I want help doing that.
I really like doing that.
We had no problem doing that.
Doing that would make sense.
That got us thinking.
That got me thinking.
Did I keep you waiting?
I like talking with you.
I enjoy working with you.
I love working with you.
Thank you for hearing me out.
We just need to get going.
Don't keep people waiting.
I can't stop doing it.
I want to stop working.
I like doing that here.
I can't avoid doing that.
I'll stop talking about you.
I feel like doing that now.
I feel like doing that again.
I only do what I enjoy doing.
Doing that will take time.
Stop talking, please.
I don't feel like going.
You should keep doing that.
You have to keep doing that.
We just have to keep working.
We had to keep working.
I don't plan on doing it.
I don't like doing it.
Why don't we keep going?
Do you mind waiting here?
Would you mind waiting here?
We don't like doing that.
Why do you keep doing that?
Please stop calling me.
I feel bad for saying that.
I plan on doing nothing.
Please come in the evening.
You have to stop doing that.
You can stop doing that now.
How do you like working here?
Just stop calling me.
You need to stop talking.
Don't stop thinking of me.
Please don't keep me waiting.
Thanks for thinking about it.
I really like talking to you.
I really like working here.
Thank you for your backing.
Thank you for backing me.
Call me in the evening.
Why do you keep going there?
Thank you for saying that.
Thank you for saying so.
`
  .split('\n')
  .filter(Boolean)

// console.log(sortBySimilarity(sentences, 0.8))

module.exports = sortBySimilarity
