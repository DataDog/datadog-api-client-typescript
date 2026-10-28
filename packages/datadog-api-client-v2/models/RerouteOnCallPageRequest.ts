/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RerouteOnCallPageRequestData } from "./RerouteOnCallPageRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Full request to reroute an On-Call Page to a different team or user.
 */
export class RerouteOnCallPageRequest {
  /**
   * The data for rerouting an On-Call Page, including attributes and resource type.
   */
  "data": RerouteOnCallPageRequestData;

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
    data: {
      baseName: "data",
      type: "RerouteOnCallPageRequestData",
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
    return RerouteOnCallPageRequest.attributeTypeMap;
  }

  public constructor() {}
}
