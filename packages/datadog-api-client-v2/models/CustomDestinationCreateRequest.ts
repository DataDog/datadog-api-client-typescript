/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationCreateData } from "./CustomDestinationCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request containing information about a single custom destination to be created.
 */
export class CustomDestinationCreateRequest {
  /**
   * The custom destination data object used for creation.
   */
  "data": CustomDestinationCreateData;

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
      type: "CustomDestinationCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
