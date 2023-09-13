/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestination } from "./CustomDestination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request containing information about a single custom destination to be updated.
 */
export class CustomDestinationUpdateRequest {
  /**
   * The custom destination object.
   */
  "data": CustomDestination;

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
      type: "CustomDestination",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
