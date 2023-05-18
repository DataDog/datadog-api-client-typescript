/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceAccountMetadata } from "./ServiceAccountMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data on your newly generated service account.
 */
export class ServiceAccountToBeCreatedData {
  /**
   * Additional metadata on your newly generated service account.
   */
  "data"?: ServiceAccountMetadata;

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
      type: "ServiceAccountMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceAccountToBeCreatedData.attributeTypeMap;
  }

  public constructor() {}
}
