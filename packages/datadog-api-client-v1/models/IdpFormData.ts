/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from "../http/http";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object describing the IdP configuration.
 */

export class IdpFormData {
  /**
   * The path to the XML metadata file you wish to upload.
   */
  "idpFile": HttpFile;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    idpFile: {
      baseName: "idp_file",
      type: "HttpFile",
      format: "binary",
    },
  };

  static getAttributeTypeMap() {
    return IdpFormData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): IdpFormData {
    const res = new IdpFormData();

    if (data.idp_file === undefined) {
      throw new TypeError(
        "missing required attribute 'idp_file' on 'IdpFormData' object"
      );
    }
    res.idpFile = ObjectSerializer.deserialize(
      data.idp_file,
      "HttpFile",
      "binary"
    );

    return res;
  }

  static serialize(data: IdpFormData): { [key: string]: any } {
    const attributeTypes = IdpFormData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.idpFile === undefined) {
      throw new TypeError(
        "missing required attribute 'idp_file' on 'IdpFormData' object"
      );
    }
    res.idp_file = ObjectSerializer.serialize(
      data.idpFile,
      "HttpFile",
      "binary"
    );

    return res;
  }

  public constructor() {}
}
