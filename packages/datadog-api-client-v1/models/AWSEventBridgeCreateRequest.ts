/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An object used to create an EventBridge source.
 */
export class AWSEventBridgeCreateRequest {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * True if Datadog should create the event bus in addition to the event
   * source. Requires the `events:CreateEventBus` permission.
   */
  "createEventBus"?: boolean;
  /**
   * The given part of the event source name, which is then combined with an
   * assigned suffix to form the full name.
   */
  "eventGeneratorName"?: string;
  /**
   * The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
   */
  "region"?: string;

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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    createEventBus: {
      baseName: "create_event_bus",
      type: "boolean",
    },
    eventGeneratorName: {
      baseName: "event_generator_name",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
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
    return AWSEventBridgeCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
