# Next.js Commerce with Agility CMS

The all-in-one starter kit for high-performance e-commerce sites. With a few clicks, Next.js developers can clone, deploy and fully customize their own store, managed with Agility CMS. Start right now!

Demo live at: [nextjs-commerce-agility-cms.vercel.app](https://nextjs-commerce-agility-cms.vercel.app/)

## Get started with Shopify
[Next.js Commerce Starter with Shopify](https://agilitycms.com/docs/nextjs/how-the-next-js-commerce-starter-works#bBDs_-S1SY)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=http%3A%2F%2Fgithub.com%2Fagility%2Fnextjs-commerce-agilitycms&project-name=nextjs-commerce-agilitycms&repo-name=nextjs-commerce-agilitycms&demo-title=Next.js%20Commerce%20Agility%20CMS&demo-description=Clone%2C%20deploy%20and%20fully%20customize%20your%20own%20E-Commerce%20store%2C%20managed%20with%20Agility%20CMS.&demo-url=https%3A%2F%2Fnextjs-commerce-agility-cms.vercel.app%2F&demo-image=https%3A%2F%2Fstatic.agilitycms.com%2FAttachments%2FNewItems%2Fshop-2_20210816163944_0.png&integration-ids=oac_Dnqk9CoC6rZ18k9nVR9KresV,oac_9HSKtXld74NG0srzdxSiBGty&external-id=%7B%20%E2%80%9CgithubRepo%E2%80%9D%3A%20%E2%80%9Cgithub.com%2Fagility%2Fnextjs-commerce-agilitycms%E2%80%9D%20%7D)

## Get Started with BigCommerce
[Next.js Commerce Starter with BigCommerce](https://agilitycms.com/docs/nextjs/how-the-next-js-commerce-starter-works#yDFzQ6WO7W)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=http%3A%2F%2Fgithub.com%2Fagility%2Fnextjs-commerce-agilitycms&project-name=nextjs-commerce-agilitycms&repo-name=nextjs-commerce-agilitycms&demo-title=Next.js%20Commerce%20Agility%20CMS&demo-description=Clone%2C%20deploy%20and%20fully%20customize%20your%20own%20E-Commerce%20store%2C%20managed%20with%20Agility%20CMS.&demo-url=https%3A%2F%2Fnextjs-commerce-agility-cms.vercel.app%2F&demo-image=https%3A%2F%2Fstatic.agilitycms.com%2FAttachments%2FNewItems%2Fshop-2_20210816163944_0.png&integration-ids=oac_Dnqk9CoC6rZ18k9nVR9KresV,oac_MuWZiE4jtmQ2ejZQaQ7ncuDT&external-id=%7B%20%E2%80%9CgithubRepo%E2%80%9D%3A%20%E2%80%9Cgithub.com%2Fagility%2Fnextjs-commerce-agilitycms%E2%80%9D%20%7D)

## Features

- Performant by default
- SEO Ready
- Internationalization
- Responsive
- UI Components
- Theming
- Standardized Data Hooks
- Integrations - Integrate seamlessly with the most common ecommerce platforms.
- Dark Mode Support

## Integrations

Next.js Commerce integrates out-of-the-box with Shopify and BigCommerce. We plan to support all major ecommerce backends in the future.

Agility CMS for Page and Content Management

## Considerations

- `framework/commerce` contains all types, helpers and functions to be used as base to build a new **provider**.
- **Providers** live under `framework`'s root folder and they will extend Next.js Commerce types and functionality (`framework/commerce`).
- We have a **Features API** to ensure feature parity between the UI and the Provider. The UI should update accordingly and no extra code should be bundled. All extra configuration for features will live under `features` in `commerce.config.json` and if needed it can also be accessed programatically.
- Each **provider** should add its corresponding `next.config.js` and `commerce.config.json` adding specific data related to the provider. For example in case of BigCommerce, the images CDN and additional API routes.
- **Providers don't depend on anything that's specific to the application they're used in**. They only depend on `framework/commerce`, on their own framework folder and on some dependencies included in `package.json`

## Configuration

### How to change providers

Open `.env.local` and change the value of `COMMERCE_PROVIDER` to the provider you would like to use, then set the environment variables for that provider (use `.env.template` as the base).

The setup for Shopify would look like this for example:

```
COMMERCE_PROVIDER=shopify
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=xxxxxxx.myshopify.com
```

And check that the `tsconfig.json` resolves to the chosen provider:

```
  "@framework": ["framework/shopify"],
  "@framework/*": ["framework/shopify/*"]
```

That's it!

### Features

Every provider defines the features that it supports under `framework/{provider}/commerce.config.json`

#### Features Available

- wishlist
- customCheckout

#### How to turn Features on and off

> NOTE: The selected provider should support the feature that you are toggling. (This means that you can't turn wishlist on if the provider doesn't support this functionality out the box)

- Open `commerce.config.json`
- You'll see a config file like this:
  ```json
  {
    "features": {
      "wishlist": false,
      "customCheckout": true
    }
  }
  ```
- Turn wishlist on by setting wishlist to true.
- Run the app and the wishlist functionality should be back on.

### How to create a new provider

Follow our docs for [Adding a new Commerce Provider](framework/commerce/new-provider.md).

If you succeeded building a provider, submit a PR with a valid demo and we'll review it asap.

## Contribute

Our commitment to Open Source can be found [here](https://vercel.com/oss).

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`
3. Install yarn: `npm install -g yarn`
4. Install the dependencies: `yarn`
5. Duplicate `.env.template` and rename it to `.env.local`
6. Add proper store values to `.env.local`
7. Run `yarn dev` to build and watch for code changes

## Work in progress

We're using Github Projects to keep track of issues in progress and todo's. Here is our [Board](https://github.com/vercel/commerce/projects/1)

People actively working on this project: @okbel & @lfades.

## Troubleshoot

<details>
<summary>I already own a BigCommerce store. What should I do?</summary>
<br>
First thing you do is: <b>set your environment variables</b>
<br>
<br>
.env.local

```sh
BIGCOMMERCE_STOREFRONT_API_URL=<>
BIGCOMMERCE_STOREFRONT_API_TOKEN=<>
BIGCOMMERCE_STORE_API_URL=<>
BIGCOMMERCE_STORE_API_TOKEN=<>
BIGCOMMERCE_STORE_API_CLIENT_ID=<>
BIGCOMMERCE_CHANNEL_ID=<>
```

If your project was started with a "Deploy with Vercel" button, you can use Vercel's CLI to retrieve these credentials.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and Github accounts (creates .vercel file): `vercel link`
3. Download your environment variables: `vercel env pull .env.local`

Next, you're free to customize the starter. More updates coming soon. Stay tuned.

</details>

<details>
<summary>BigCommerce shows a Coming Soon page and requests a Preview Code</summary>
<br>
After Email confirmation, Checkout should be manually enabled through BigCommerce platform. Look for "Review & test your store" section through BigCommerce's dashboard.
<br>
<br>
BigCommerce team has been notified and they plan to add more detailed about this subject.
</details>
