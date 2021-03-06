## GNHML
Platform application for the [Greater New Haven Math League](http://www.gnhml.org/)

## Features
1. Real Time Scoring
2. Real Time Ranking
3. Seasonal Data Compilation
4. Team Management
5. Real Time Administration

## Data Model:

```javascript
Profiles = [{
    _id: PROFILE_ID,
    name: PROFILE_NAME,
    class: PROFILE_CLASS_YEAR,
    school_id: SCHOOL_ID,
    team_id: TEAM_ID,
    account_id: ACCOUNT_ID
}]
Schools = [{
    _id: SCHOOL_ID,
    name: SCHOOL_NAME
}]
Teams = [{
    _id: TEAM_ID,
    name: TEAM_NAME
}]
Seasons = [{
    _id: SEASON_ID,
    start_date: SEASON_START_DATE,
    end_date: SEASON_END_DATE
}]
Competitions = [{
    _id: COMPETITION_ID,
    date: COMPETITION_DATE,
    season: SEASON_ID,
    teams: [TEAM_ID]
}]
Scores = [{
    question_id: QUESTION_ID,
    round_id: ROUND_ID,
    competition_id: COMPETITION_ID,
    student_id: PROFILE_ID,
    team_id: TEAM_ID,
    score: SCORE
}]
```
