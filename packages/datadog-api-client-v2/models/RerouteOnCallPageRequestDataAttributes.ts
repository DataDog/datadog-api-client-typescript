/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreatePageRequestDataAttributesTarget } from "./CreatePageRequestDataAttributesTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details about where to reroute the On-Call Page.
 */
export class RerouteOnCallPageRequestDataAttributes {
  /**
   * An optional comment explaining why the Page is being rerouted.
   */
  "comment"?: string;
  /**
   * Information about the target to notify (such as a team or user).
   */
  "target": CreatePageRequestDataAttributesTarget;

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
    comment: {
      baseName: "comment",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "CreatePageRequestDataAttributesTarget",
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
    return RerouteOnCallPageRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
