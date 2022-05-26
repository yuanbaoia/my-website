<template>
  <div id="team-page">
    <div class="main-box flex">
      <div class="description">
        <h2>Your Group Task</h2>
        <div class="content">
          <h3>A2</h3>
          <p>Write a research plan to guide your context-mapping study,
            using the provided template as a starting point. In the plan
            you should support and academically justify your approach,
            with reference to relevant literature.
            Prepare and distribute sensitising exercises to a relevant
            group of participants NB: Finding and arranging research
            participants takes time! Start early.
            Conduct a context-mapping session with the same
            participants, exploring their experiences in relation to the
            brief. Record your session (audio/video recordings and
            photos), and transcribe key episodes of the recorded data.
            Analyse your recorded data from the context mapping study
            using statement cards. Synthesise your data by drawing out
            key insights and themes that are relevant to your project.
            Prepare a research visualisation that captures key insights
            and inspiring quotes from your research, in a poster format.</p>
        </div>
      </div>
      <div class="member">
        <h2>Group Member</h2>
        <p>
          Jackson lio<br />
          wen tingna<br />
          kristen sherry
        </p>
      </div>
      <div class="group">
        <h2>Group List</h2>
        <p>
          2014 Group34<br />
          2017 Group12
        </p>
      </div>
    </div>
    <p class="time">Due day: <span>Apr 29 23:00</span></p>
  </div>
</template>

<script>

export default {
  name: 'TeamPage',
}
</script>

<style lang="less" scoped>
#team-page{
  padding: 40px;
}
.time{
  margin-top: 30px;
  font-size: 36px;
  span{
    font-size: 20px;
  }
}
.description{
  flex: 5;
  margin-right: 40px;
  h2{
    font-size: 40px;
    margin-bottom: 30px;
  }
  .content{
    padding: 20px 10px;
    background: linear-gradient(#FFF, #E4C0D6, #FFF);
    border: 1px solid #333;
    box-shadow: 0px 5px 5px #ccc;
    height: calc(100vh - 400px);
    h3{
      font-size: 40px;
      margin-bottom: 30px;
    }
    p{
      font-size: 12px;
      line-height: 20px;
    }
  }
}
.member{
  h2{
    font-size: 24px;
    margin: 10px auto 30px;
  }
  p{
    width: 160px;
    padding: 40px 10px;
    background: linear-gradient(#FFF, #E4C0D6, #FFF);
    border: 1px solid #333;
    box-shadow: 0px 5px 5px #ccc;
    line-height: 30px;
    font-size: 16px;
  }
}
.group{
  h2{
    font-size: 24px;
    margin: 10px auto 30px;
  }
  p{
    width: 160px;
    padding: 40px 10px;
    background: linear-gradient(#FFF, #E4C0D6, #FFF);
    border: 1px solid #333;
    box-shadow: 0px 5px 5px #ccc;
    line-height: 30px;
    font-size: 16px;
  }
}
.member,
.group{
  flex: 3;
}
@media (max-width: 768px) {
  #team-page{
    padding: 0;
    .main-box{
      display: block;
      .description,.member,.group{
        margin-right: 0px;
        .content{
          height: auto;
        }
        >p{
          width: calc(100vw - 40px);
          box-sizing: border-box;
          padding: 20px;
        }
        h2{
          font-size: 20px;
          text-align: center;
        }
        h3{
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }
    .time{
      font-size: 20px;
      span{
        font-size: 14px;
      }
    }
  }
}
</style>