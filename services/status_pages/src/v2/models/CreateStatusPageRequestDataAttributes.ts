import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestDataAttributesComponentsItems } from "./CreateStatusPageRequestDataAttributesComponentsItems";
import { CreateStatusPageRequestDataAttributesType } from "./CreateStatusPageRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesVisualizationLayout } from "./CreateStatusPageRequestDataAttributesVisualizationLayout";
import { CreateStatusPageRequestDataAttributesVisualizationType } from "./CreateStatusPageRequestDataAttributesVisualizationType";

/**
 * The supported attributes for creating a status page.
 */
export class CreateStatusPageRequestDataAttributes {
  /**
   * The base64-encoded image data displayed on the status page.
   */
  "companyLogo"?: string;
  /**
   * The components displayed on the status page.
   */
  "components"?: Array<CreateStatusPageRequestDataAttributesComponentsItems>;
  /**
   * The subdomain of the status page's url taking the form `https://{domain_prefix}.statuspage.datadoghq.com`. Globally unique across Datadog Status Pages.
   */
  "domainPrefix": string;
  /**
   * Base64-encoded image data included in email notifications sent to status page subscribers.
   */
  "emailHeaderImage"?: string;
  /**
   * Whether email notifications are enabled for the status page. Must be enabled when `subscriptions_enabled` is `true`.
   */
  "emailNotificationsEnabled"?: boolean;
  /**
   * Base64-encoded image data displayed in the browser tab.
   */
  "favicon"?: string;
  /**
   * Whether Microsoft Teams subscriptions are enabled for the status page.
   */
  "msTeamsSubscriptionsEnabled"?: boolean;
  /**
   * The name of the status page.
   */
  "name": string;
  /**
   * Whether the RSS feed is enabled for the status page.
   */
  "rssFeedEnabled"?: boolean;
  /**
   * The base64-encoded image data used as the Slack app icon.
   */
  "slackAppIcon"?: string;
  /**
   * Whether Slack subscriptions are enabled for the status page.
   */
  "slackSubscriptionsEnabled"?: boolean;
  /**
   * Whether users can subscribe to the status page.
   */
  "subscriptionsEnabled"?: boolean;
  /**
   * The type of the status page controlling how the status page is accessed.
   */
  "type": CreateStatusPageRequestDataAttributesType;
  /**
   * The layout of components on the status page. Defaults to `list`. `grid` requires `visualization_type` to be `component_name_only`; changing `visualization_type` to any other value resets the layout to `list`.
   */
  "visualizationLayout"?: CreateStatusPageRequestDataAttributesVisualizationLayout;
  /**
   * The visualization type of the status page.
   */
  "visualizationType": CreateStatusPageRequestDataAttributesVisualizationType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    companyLogo: {
      baseName: "company_logo",
      type: "string",
    },
    components: {
      baseName: "components",
      type: "Array<CreateStatusPageRequestDataAttributesComponentsItems>",
    },
    domainPrefix: {
      baseName: "domain_prefix",
      type: "string",
      required: true,
    },
    emailHeaderImage: {
      baseName: "email_header_image",
      type: "string",
    },
    emailNotificationsEnabled: {
      baseName: "email_notifications_enabled",
      type: "boolean",
    },
    favicon: {
      baseName: "favicon",
      type: "string",
    },
    msTeamsSubscriptionsEnabled: {
      baseName: "ms_teams_subscriptions_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rssFeedEnabled: {
      baseName: "rss_feed_enabled",
      type: "boolean",
    },
    slackAppIcon: {
      baseName: "slack_app_icon",
      type: "string",
    },
    slackSubscriptionsEnabled: {
      baseName: "slack_subscriptions_enabled",
      type: "boolean",
    },
    subscriptionsEnabled: {
      baseName: "subscriptions_enabled",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "CreateStatusPageRequestDataAttributesType",
      required: true,
    },
    visualizationLayout: {
      baseName: "visualization_layout",
      type: "CreateStatusPageRequestDataAttributesVisualizationLayout",
    },
    visualizationType: {
      baseName: "visualization_type",
      type: "CreateStatusPageRequestDataAttributesVisualizationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateStatusPageRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
