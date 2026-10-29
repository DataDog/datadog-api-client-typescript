/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RerouteOnCallPageRequestDataAttributes } from "./RerouteOnCallPageRequestDataAttributes";
import { RerouteOnCallPageRequestDataType } from "./RerouteOnCallPageRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data for rerouting an On-Call Page, including attributes and resource type.
 */
export class RerouteOnCallPageRequestData {
  /**
   * Details about where to reroute the On-Call Page.
   */
  "attributes": RerouteOnCallPageRequestDataAttributes;
  /**
   * The type of resource used when rerouting an On-Call Page.
   */
  "type": RerouteOnCallPageRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "RerouteOnCallPageRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RerouteOnCallPageRequestDataType",
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
    return RerouteOnCallPageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
