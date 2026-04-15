/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetTracersResponseData } from "./FleetTracersResponseData";
import { FleetTracersResponseMeta } from "./FleetTracersResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a paginated list of fleet tracers.
 */
export class FleetTracersResponse {
  /**
   * The response data containing status and tracers array.
   */
  "data": FleetTracersResponseData;
  /**
   * Metadata for the list of tracers response.
   */
  "meta"?: FleetTracersResponseMeta;

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
      type: "FleetTracersResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetTracersResponseMeta",
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
    return FleetTracersResponse.attributeTypeMap;
  }

  public constructor() {}
}
