/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageMetaPage } from "./ContainerImageMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response metadata object.
 */
export class ContainerImageMeta {
  /**
   * Paging attributes.
   */
  "pagination"?: ContainerImageMetaPage;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pagination: {
      baseName: "pagination",
      type: "ContainerImageMetaPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerImageMeta.attributeTypeMap;
  }

  public constructor() {}
}
