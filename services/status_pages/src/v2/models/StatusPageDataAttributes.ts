import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageRequestDataAttributesType } from "./CreateStatusPageRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesVisualizationLayout } from "./CreateStatusPageRequestDataAttributesVisualizationLayout";
import { CreateStatusPageRequestDataAttributesVisualizationType } from "./CreateStatusPageRequestDataAttributesVisualizationType";
import { StatusPageDataAttributesComponentsItems } from "./StatusPageDataAttributesComponentsItems";

/**
 * The attributes of a status page.
 */
export class StatusPageDataAttributes {
  /**
   * Base64-encoded image data displayed on the status page.
   */
  "companyLogo"?: string;
  /**
   * Components displayed on the status page.
   */
  "components"?: Array<StatusPageDataAttributesComponentsItems>;
  /**
   * Timestamp of when the status page was created.
   */
  "createdAt"?: Date;
  /**
   * If configured, the url that the status page is accessible at.
   */
  "customDomain"?: string;
  /**
   * Whether the custom domain is configured.
   */
  "customDomainEnabled"?: boolean;
  /**
   * The subdomain of the status page URL. Public pages use `https://{domain_prefix}.statuspage.datadoghq.com`, while private pages use `https://{domain_prefix}.private.statuspage.datadoghq.com`. Globally unique across Datadog Status Pages.
   */
  "domainPrefix"?: string;
  /**
   * Base64-encoded image data included in email notifications sent to status page subscribers.
   */
  "emailHeaderImage"?: string;
  /**
   * Whether email notifications are enabled for the status page. Must be enabled when `subscriptions_enabled` is `true`.
   */
  "emailNotificationsEnabled"?: boolean;
  /**
   * Whether the status page is enabled.
   */
  "enabled"?: boolean;
  /**
   * Base64-encoded image data displayed in the browser tab.
   */
  "favicon"?: string;
  /**
   * Timestamp of when the status page was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Whether Microsoft Teams subscriptions are enabled for the status page.
   */
  "msTeamsSubscriptionsEnabled"?: boolean;
  /**
   * The name of the status page.
   */
  "name"?: string;
  /**
   * The url that the status page is accessible at.
   */
  "pageUrl"?: string;
  /**
   * Whether the RSS feed is enabled for the status page.
   */
  "rssFeedEnabled"?: boolean;
  /**
   * The Slack app icon URL for the status page.
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
   * The type of the status page controlling how the status page is accessed. Public pages are accessible to anyone, internal pages are accessible to authenticated users in the Datadog organization, and private pages are accessible only to users matching an allow email access policy and no deny email access policy.
   */
  "type"?: CreateStatusPageRequestDataAttributesType;
  /**
   * The layout of components on the status page. Defaults to `list`. `grid` requires `visualization_type` to be `component_name_only`; changing `visualization_type` to any other value resets the layout to `list`.
   */
  "visualizationLayout"?: CreateStatusPageRequestDataAttributesVisualizationLayout;
  /**
   * The visualization type of the status page.
   */
  "visualizationType"?: CreateStatusPageRequestDataAttributesVisualizationType;
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
      type: "Array<StatusPageDataAttributesComponentsItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    customDomain: {
      baseName: "custom_domain",
      type: "string",
    },
    customDomainEnabled: {
      baseName: "custom_domain_enabled",
      type: "boolean",
    },
    domainPrefix: {
      baseName: "domain_prefix",
      type: "string",
    },
    emailHeaderImage: {
      baseName: "email_header_image",
      type: "string",
    },
    emailNotificationsEnabled: {
      baseName: "email_notifications_enabled",
      type: "boolean",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    favicon: {
      baseName: "favicon",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    msTeamsSubscriptionsEnabled: {
      baseName: "ms_teams_subscriptions_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pageUrl: {
      baseName: "page_url",
      type: "string",
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
    },
    visualizationLayout: {
      baseName: "visualization_layout",
      type: "CreateStatusPageRequestDataAttributesVisualizationLayout",
    },
    visualizationType: {
      baseName: "visualization_type",
      type: "CreateStatusPageRequestDataAttributesVisualizationType",
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
    return StatusPageDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
