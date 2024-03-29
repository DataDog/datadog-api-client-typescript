/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Dot1SlackType } from "./ServiceDefinitionV2Dot1SlackType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service owner's Slack channel.
 */
export class ServiceDefinitionV2Dot1Slack {
  /**
   * Slack Channel.
   */
  "contact": string;
  /**
   * Contact Slack.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": ServiceDefinitionV2Dot1SlackType;

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
    contact: {
      baseName: "contact",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceDefinitionV2Dot1SlackType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Dot1Slack.attributeTypeMap;
  }

  public constructor() {}
}
