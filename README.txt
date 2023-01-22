# Instruction to run the application


### Scrape Data

To scrape the data run the code 1_twitter_snscrape.ipynb

As the tweets are scrape monthly as stored in different files we then combined to 1 single file so run the code 2_Combinetweets.ipynb


### Hadoop Setup

start-dfs.cmd

start-yarn.cmd


### Spark Setup

spark-class org.apache.spark.deploy.master.Master

spark-class org.apache.spark.deploy.worker.Worker spark://192.168.80.1:7077


### Data Pre-processing

To pre-process the data to make more efficent run the 3_DataPre-Processing.ipynb


### Sentiment Analysis

To find the sentiment of the tweets run the 4_Sentiment_analysis_Big_Data_Final_Project.ipynb


### Interactive website dashboard

To launch the website read the instruction in the 5_bigdata_frontend folder.




### Please check the path of the file where you are importing the data.