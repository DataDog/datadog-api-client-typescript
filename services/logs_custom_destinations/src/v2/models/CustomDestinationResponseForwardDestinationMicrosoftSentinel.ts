import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseForwardDestinationMicrosoftSentinelType } from "./CustomDestinationResponseForwardDestinationMicrosoftSentinelType";

/**
 * The Microsoft Sentinel destination.
 */
export class CustomDestinationResponseForwardDestinationMicrosoftSentinel {
  /**
   * Client ID from the Datadog Azure integration.
   */
  "clientId": string;
  /**
   * Azure data collection endpoint.
   */
  "dataCollectionEndpoint": string;
  /**
   * Azure data collection rule ID.
   */
  "dataCollectionRuleId": string;
  /**
   * Azure stream name.
   */
  "streamName": string;
  /**
   * Tenant ID from the Datadog Azure integration.
   */
  "tenantId": string;
  /**
   * Type of the Microsoft Sentinel destination.
   */
  "type": CustomDestinationResponseForwardDestinationMicrosoftSentinelType;
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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    dataCollectionEndpoint: {
      baseName: "data_collection_endpoint",
      type: "string",
      required: true,
    },
    dataCollectionRuleId: {
      baseName: "data_collection_rule_id",
      type: "string",
      required: true,
    },
    streamName: {
      baseName: "stream_name",
      type: "string",
      required: true,
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseForwardDestinationMicrosoftSentinelType",
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
    return CustomDestinationResponseForwardDestinationMicrosoftSentinel.attributeTypeMap;
  }

  public constructor() {}
}
