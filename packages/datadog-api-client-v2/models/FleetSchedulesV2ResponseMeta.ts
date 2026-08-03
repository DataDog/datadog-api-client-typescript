/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetSchedulesV2Page } from "./FleetSchedulesV2Page";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the v2 list of schedules response.
 */
export class FleetSchedulesV2ResponseMeta {
  /**
   * Pagination details for the v2 list of schedules.
   */
  "page"?: FleetSchedulesV2Page;

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
    page: {
      baseName: "page",
      type: "FleetSchedulesV2Page",
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
    return FleetSchedulesV2ResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
