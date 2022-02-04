import classes from "./PracticeAreas.module.css";

const listItems = [
  {
    title: "Litigation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus laoreet lacus, luctus vehicula diam.",
  },
  {
    title: "Insolvency",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Dispute Resolution",
    content:
      "Phasellus iaculis lectus fermentum, sodales ex quis, dapibuserat. In auctor mi blandit, consectetur lectus.",
  },
  {
    title: "Business",
    content:
      "Nulla id libero metus. Mauris est est, ultrices sit amet lacusvel, euismod fermentum lectus.",
  },
  {
    title: "Fraud",
    content:
      "Proin vehicula augue ultricies augue hendrerit pulvinar. Nullamet diam quis tellus aliquet laoreet. Proin.",
  },
  {
    title: "Tax",
    content:
      "Nullam rutrum, sapien vitae ultrices aliquet, erat magna rhoncusmauris, in egestas tortor leo sed.",
  },
];

const PracticeArea = () => {
  return (
    <div className={classes.Practice}>
      <div className={classes.Heading}>
        <div className={classes.HeadText}>
          <b>Practice</b>
          <br /> Areas
        </div>
        <div className={classes.Items_Container}>
          <div className={classes.Practice_Items}>
            <div className={classes.row}>
              <div className={classes.col}>
                <div className={classes.Title}>{listItems[0].title}</div>
                <div className={classes.Content}>{listItems[0].content}</div>
              </div>
              <div className={classes.col}>
                <div className={classes.Title}>{listItems[1].title}</div>
                <div className={classes.Content}>{listItems[1].content}</div>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col}>
                <div className={classes.Title}>{listItems[2].title}</div>
                <div className={classes.Content}>{listItems[2].content}</div>
              </div>
              <div className={classes.col}>
                <div className={classes.Title}>{listItems[3].title}</div>
                <div className={classes.Content}>{listItems[3].content}</div>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col}>
                <div className={classes.Title}>{listItems[4].title}</div>
                <div className={classes.Content}>{listItems[4].content}</div>
              </div>
              <div className={classes.col}>
                <div className={classes.Title}>{listItems[5].title}</div>
                <div className={classes.Content}>{listItems[5].content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
