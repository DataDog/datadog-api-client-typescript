/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeMetadata } from "./AttributeMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional metadata on your newly generated service account.
 */
export class ServiceAccountMetadata {
  /**
   * Attribute Metadata.
   */
  "attributes"?: AttributeMetadata;
  /**
   * The type of service account.
   */
  "type"?: string;

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
      type: "AttributeMetadata",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceAccountMetadata.attributeTypeMap;
  }

  public constructor() {}
}
