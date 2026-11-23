/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayProviderInitialBinding } from "./AiGatewayProviderInitialBinding";
import { AiGatewayRoutingRuleTierRequest } from "./AiGatewayRoutingRuleTierRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create an AI Gateway routing rule.
 */
export class AiGatewayRoutingRuleCreateAttributes {
  /**
   * Optional description of what the routing rule is for. Up to 500 characters. Line breaks are allowed.
   * Leading and trailing spaces are trimmed, and a blank value is the same as none.
   */
  "description"?: string;
  /**
   * Optional human-readable name shown in place of the slug. Up to 100 characters on one line. Need not be unique.
   * Leading and trailing spaces are trimmed, and a blank value is the same as none.
   */
  "displayName"?: string;
  /**
   * Reserved for initial View and Edit permissions. Supplying this attribute returns HTTP 400 and doesn't
   * create the route. Create the route, then set its permissions through the restriction policy API.
   */
  "initialBindings"?: Array<AiGatewayProviderInitialBinding>;
  /**
   * Organization-unique resource slug.
   */
  "slug": string;
  "tiers": Array<AiGatewayRoutingRuleTierRequest>;

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
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    initialBindings: {
      baseName: "initial_bindings",
      type: "Array<AiGatewayProviderInitialBinding>",
    },
    slug: {
      baseName: "slug",
      type: "string",
      required: true,
    },
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayRoutingRuleTierRequest>",
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
    return AiGatewayRoutingRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
