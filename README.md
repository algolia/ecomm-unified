# E-Commerce Unified UI

<p align="center">
<img src="https://cl.ly/c3fa6a6b250a/Screenshot%2525202019-05-27%252520at%25252010.17.35.png" />
</p>

**This project aims to be used by any e-commerce website to bootstrap a search experience powered by Algolia the fastest way possible.**

While you would still have to push your data to Algolia, the goal of E-Commerce Unified is to remove the need of implementing front-end logic and be able to start using Algolia as quickly as possible.

### How to use

Follow the few steps described below to start using E-Commerce Unified UI.

1. **Push your data to Algolia** (following the required data structure),
2. **Fork** this GitHub Repository to your own,
3. **Copy and replace the `src/config.example.js` file to `src/config.js`** to better match your needs,
4. **Run `npm run build` (or `yarn build`)** to build the necessary .js files,
5. **Host and include .js files** on your front-end and start using!

### Data Format

//

### Configuration Options

The `src/config.js` file describe the multiple available options to be used with E-Commerce Unified UI.

| Option Name              | Type      | Required | Comments                                                                             |
|--------------------------|-----------|----------|--------------------------------------------------------------------------------------|
| appId                    | `string`  | Yes      | Set your Algolia Application ID (accessible from the Dashboard)                      |
| searchApiKey             | `string`  | Yes      | Set your Algolia Search API Key (accessible from the Dashboard)                      |
| indexName                | `string`  | Yes      | Set your Algolia Index name                                                          |
| placeholderId            | `string`  | Yes      | Set the DOM element that triggers the Search Results overlay                         |
| querySuggestions         | `boolean` | No       | Enable the Query Suggestions feature                                                 |
| suggestions              | `object`  | No       | Set the Query Suggestions options (`appId`, `apiKey`, `indexName`, `maxSuggestions`) |
| googleAnalytics          | `bool`    | No       | Enable Google Analytics tracking (Google script needs to be included on your page)    |
| instantSearchConfigure   | `object`  | No       | Parameters to pass to the InstantSearch widget                                       |
| hits                     | `object`  | Yes      | Set the Hits option (`hitsPerPage` and `render()`)                                   |
| refinements              | `object`  | No       | Set the different Refinements available                                              |
| sorts                    | `object` | No       | Set the different Sorts available                                              |
| translations             | `object` | No       | Set the different translations to be used                                            |

### Disclaimer

> E-Commerce Unified UI is made accessible to you for trial and/or experimentation purposes. You may decide to use it or not. You are aware that use of E-Commerce Unified UI in production may increase your consumption of the Service, including [Queries Per Second](https://www.algolia.com/doc/faq/monitoring/which-queries-are-counted-as-part-of-the-max-qps-computations/).

> Algolia does not support E-Commerce Unified UI, and may discontinue it at any time at its sole discretion; configurations and/or customisations entered by you into E-Commerce Unified UI may be permanently lost. Any feedback (including source code) you may provide to us regarding E-Commerce Unified UI may be used by Algolia to improve the Service. 

> E-Commerce Unified UI source code is provided “as is” and “as available” without any warranty of any kind. Algolia disclaims all obligation and liability for any harm or damage arising out of or in connection with E-Commerce Unified UI. For purposes of our [SLA](https://www.algolia.com/policies/sla), the E-Commerce Unified UI is not an “API Client”.
