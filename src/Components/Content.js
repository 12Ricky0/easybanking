import React from "react";
import Image, { Button } from "./Image";
import Text from "./Text";

function Content() {

    return (
        <div>
            <main>
                <div className="container row">
                    <div className="child-1 col">
                        <Image className="bg-img" src="images/bg-intro-mobile.svg" />
                        <Image className="bg-img-desktop" src="images/bg-intro-desktop.svg" />
                        <div className="overflow">
                            <Image className="mockup-img" src="images/image-mockups.png" />
                        </div>
                    </div>
                    <div className="article-1 col">
                        <Text
                            h1="Next generation digital banking"
                            article="  Take your financial life online. Your Easybank account will be a one-stop-shop
                                     for spending, saving, budgeting, investing, and much more."
                        />
                        <Button />

                    </div>
                </div>
                <div className="container-2">
                    <div className="article-2 width-display">
                        <Text
                            h1="Why choose Easybank?"
                            article=" We leverage Open Banking to turn your bank account into your financial hub. Control
                         your finances like never before."
                        />
                    </div>
                    <div className="container-2a">

                        <div className="article-2 spacing">
                            <Image className="" src="images/icon-online.svg" />
                            <Text
                                heading="Online Banking"
                                article="Our modern web and mobile applications allow you to keep track of your finances
                                      wherever you are in the world."
                            />
                        </div>
                        <div className="article-2">
                            <Image className="" src="images/icon-budgeting.svg" />
                            <Text
                                heading="Simple Budgeting"
                                article="See exactly where your money goes each month. Receive notifications when you’re
                                      close to hitting your limits."
                            />
                        </div>
                        <div className="article-2">
                            <Image className="" src="images/icon-onboarding.svg" />
                            <Text
                                heading="Fast Onboarding"
                                article="We don’t do branches. Open your account in minutes online and start taking control
                                     of your finances right away."
                            />
                        </div>
                        <div className="article-2">
                            <Image className="" src="images/icon-api.svg" />
                            <Text
                                heading="Open API"
                                article="Manage your savings, investments, pension, and much more from one account. Tracking
                                     your money has never been easier."
                            />
                        </div>
                    </div>
                </div>
                <div className="container-3">
                    <div className="sub-container">
                        <div className="alignment">
                            <Text
                                h1="Latest Articles"
                            />
                        </div>
                        <div className="container-3a">
                            <div className="article-3">
                                <div className="edited">
                                    <Image className="jpg-img" src="images/image-currency.jpg" />
                                </div>
                                <div className="child-3">
                                    <Text
                                        name="By Claire Robinson"
                                        heading="Receive money in any currency with no fees"
                                        article="The world is getting smaller and we’re becoming more mobile. So why should you be
                                       forced to only receive money in a single …"
                                    />
                                </div>
                            </div>

                            <div className="article-3">
                                <Image className="jpg-img" src="images/image-restaurant.jpg" />
                                <div className="child-3">
                                    <Text
                                        name="By Wilson Hutton"
                                        heading="Treat yourself without worrying about money"
                                        article="Our simple budgeting feature allows you to separate out your spending and set
                                       realistic limits each month. That means you …"
                                    />
                                </div>
                            </div>
                            <div className="article-3">
                                <Image className="jpg-img" src="images/image-plane.jpg" />
                                <div className="child-3">
                                    <Text
                                        name="By Wilson Hutton"
                                        heading="Take your Easybank card wherever you go"
                                        article="We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                       while you’re abroad. We’ll even show you …"
                                    />
                                </div>
                            </div>
                            <div className="article-3">
                                <Image className="jpg-img" src="images/image-confetti.jpg" />
                                <div className="child-3">
                                    <Text
                                        name="By Claire Robinson"
                                        heading="Our invite-only Beta accounts are now live!"
                                        article="After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                     It’s easy to request an invite through the site ..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </main>
        </div>
    );
}

export default Content;
