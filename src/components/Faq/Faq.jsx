import faq from "../../assets/images/FAQ.png";
const Faq = () => {
  return (
    <div className="lg:py-8 lg:mx-auto">
      <div>
        <div className="w-10/12 mx-auto">
          <h3 className="font-bold text-4xl text-center p-8">Questions?</h3>
          <p className="text-center text-base font-medium text-secondary-color pb-8">
            Frequently Asked Questions. Check if you need any relevant
            information like others do.
          </p>
        </div>
      </div>
      <div className="flex p-8 flex-col gap-1 lg:flex-row ">
        <div className="mr-2 mb-7 lg:mb-0">
          <img
            className="w-full"
            src={faq}
            alt="frequently asked question sign"
          />
        </div>
        <div className="grid gap-1 flex-grow">
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              In which website , do I need to submit visa renewal applicaion?
            </div>
            <div className="collapse-content">
              <p>https://indianfrro.gov.in/</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do I need to pay any fees for the application?
            </div>
            <div className="collapse-content">
              <p>No, there is no fees required.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How many days ago do I need to submit the application?
            </div>
            <div className="collapse-content">
              <p>Better to submit the application at least 7 days ago.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What if I apply after my visa got expired?
            </div>
            <div className="collapse-content">
              <p>You will have to pay fine.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is the amount of fine?
            </div>
            <div className="collapse-content">
              <p>Depens on how many days ago your visa got expired.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
