import { css } from "solid-styled-components";

function MyComponent() {

  return (
    <>
      <div
        class={css({
          padding: "10px",
        })}
      >
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </div>
      <div
        class={css({
          display: "flex",
          flexDirection: "column",
          position: "relative",
          marginTop: "0px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "0px",
          paddingBottom: "0px",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(255, 255, 255, 1)",
          opacity: "1",
          flexGrow: "0",
          alignSelf: "stretch",
          "@media (max-width: 991px)": {
            height: "100vh",
            flexGrow: "0",
          },
        })}
        maxWidth={1440}
        lazyLoad={false}
      >
        <section
          class={css({
            width: "100%",
            alignSelf: "stretch",
            flexGrow: "1",
            maxWidth: "1440px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
          })}
        >
          <div
            class={css({
              display: "flex",
              justifyContent: "flex-start",
              paddingRight: "12px",
              paddingLeft: "12px",
              zIndex: "999",
              flexGrow: "0",
              flexDirection: "column",
              marginRight: "auto",
              marginLeft: "auto",
              width: "100%",
              marginTop: "auto",
              marginBottom: "15%",
              "@media (max-width: 991px)": {
                display: "flex",
                flexDirection: "column",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "auto",
                alignItems: "center",
                height: "auto",
                flexGrow: "0",
                marginBottom: "auto",
              },
              "@media (max-width: 640px)": {
                paddingLeft: "0px",
                paddingRight: "0px",
                marginLeft: "auto",
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                marginRight: "auto",
              },
            })}
          >
            <div
              class={css({
                justifyContent: "flex-start",
                alignSelf: "stretch",
                alignItems: "flex-start",
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
              })}
            >
              <div
                class={css({
                  alignSelf: "stretch",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "5em",
                  lineHeight: "120.00000476837158%",
                  letterSpacing: "0px",
                  textAlign: "center",
                  fontFamily: '"Alex Brush", sans-serif',
                  fontWeight: "700",
                  marginRight: "auto",
                  marginLeft: "auto",
                  width: "auto",
                  maxWidth: "100%",
                  "@media (max-width: 991px)": {
                    alignSelf: "stretch",
                    fontSize: "4rem",
                    textAlign: "center",
                    width: "auto",
                  },
                  "@media (max-width: 640px)": {
                    fontSize: "4rem",
                    lineHeight: "100%",
                  },
                })}
                builder-id="builder-4db18970cff24c9fa2c346fc2fd43c11"
              >
                Heading for your cover
              </div>
              <div
                class={css({
                  alignSelf: "stretch",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "24px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "300",
                  marginTop: "8px",
                  width: "100%",
                  maxWidth: "100%",
                  "@media (max-width: 991px)": {
                    textAlign: "center",
                  },
                  "@media (max-width: 640px)": {
                    fontSize: "16px",
                    letterSpacing: "1px",
                  },
                })}
                builder-id="builder-d9efcec4d2df421e9397babcc682165f"
              >
                Describe your product here. Also, customise the design as per
                your brand guidelines.
              </div>
            </div>
            <div
              class={css({
                alignSelf: "center",
                gap: "16px",
                marginTop: "36px",
                width: "100%",
                maxWidth: "444px",
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
                marginRight: "auto",
                "@media (max-width: 991px)": {
                  alignSelf: "stretch",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  width: "100%",
                },
              })}
            >
              <button
                class={css({
                  all: "unset",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  appearance: "none",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "rgba(0, 0, 0, 1)",
                  borderRadius: "4px",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: "auto",
                  marginBottom: "auto",
                  width: "auto",
                  flexGrow: "1",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(255, 255, 255, 1)",
                })}
                openLinkInNewTab={false}
              >
                Buy Now
              </button>
              <button
                class={css({
                  all: "unset",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  appearance: "none",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "white",
                  borderRadius: "4px",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "auto",
                  flexGrow: "1",
                  borderStyle: "solid",
                  borderWidth: "2px",
                })}
                openLinkInNewTab={false}
              >
                Explore
              </button>
            </div>
          </div>
          <button
            class={css({
              all: "unset",
              display: "flex",
              position: "relative",
              appearance: "none",
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "12px",
              paddingRight: "12px",
              color: "white",
              borderRadius: "104px",
              textAlign: "center",
              cursor: "pointer",
              alignSelf: "center",
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F481ecd094abe46c49a3ee5256ef72179%2F26a13528ea844d8dbd4ab0a237e7c0b9)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              flexGrow: "0",
              backgroundColor: "rgba(255, 255, 255, 1)",
              flexDirection: "column",
              width: "48px",
              marginTop: "20px",
              height: "48px",
              "@media (max-width: 991px)": {
                marginTop: "auto",
              },
              "@media (max-width: 640px)": {
                marginTop: "auto",
              },
            })}
            openLinkInNewTab={false}
          ></button>
          <div
            class={css({
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
              width: "100%",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
              zIndex: "1",
              position: "absolute",
              height: "100vh",
              marginBottom: "auto",
              alignSelf: "center",
              "@media (max-width: 991px)": {
                height: "100vh",
                flexGrow: "1",
              },
            })}
            lockAspectRatio={false}
          >
            <picture>
              <source srcset="" type="image/webp" />
              <img
                class={css({
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0",
                  left: "0",
                })}
                loading="lazy"
                src="https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </picture>
            <div
              class={
                "builder-image-sizer " +
                css({
                  width: "100%",
                  paddingTop: "66.7%",
                  pointerEvents: "none",
                  fontSize: "0",
                })
              }
            ></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MyComponent;
