import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3DatadogIntegrationOpsgenie } from "./EntityV3DatadogIntegrationOpsgenie";
import { EntityV3DatadogIntegrationPagerduty } from "./EntityV3DatadogIntegrationPagerduty";

/**
 * A base schema for defining third-party integrations.
 */
export class EntityV3Integrations {
  /**
   * An Opsgenie integration schema.
   */
  "opsgenie"?: EntityV3DatadogIntegrationOpsgenie;
  /**
   * A PagerDuty integration schema.
   */
  "pagerduty"?: EntityV3DatadogIntegrationPagerduty;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    opsgenie: {
      baseName: "opsgenie",
      type: "EntityV3DatadogIntegrationOpsgenie",
    },
    pagerduty: {
      baseName: "pagerduty",
      type: "EntityV3DatadogIntegrationPagerduty",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3Integrations.attributeTypeMap;
  }

  public constructor() {}
}
