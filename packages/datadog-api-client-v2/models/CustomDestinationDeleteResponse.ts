/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationMetadata } from "./CustomDestinationMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing metadata about a deleted custom destination.
 */
export class CustomDestinationDeleteResponse {
  /**
   * The metadata relevant to your configuration or recent request.
   */
  "meta"?: CustomDestinationMetadata;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    meta: {
      baseName: "meta",
      type: "CustomDestinationMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
