import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageFlavor } from "./ContainerImageFlavor";
import { ContainerImageVulnerabilities } from "./ContainerImageVulnerabilities";

/**
 * Attributes for a Container Image.
 */
export class ContainerImageAttributes {
  /**
   * Number of containers running the image.
   */
  "containerCount"?: number;
  /**
   * Platform-specific image metadata, including size in bytes and available build and operating
   * system details. Use these objects to associate sizes with platforms when platform information is available.
   */
  "imageFlavors"?: Array<ContainerImageFlavor>;
  /**
   * Image version tags, such as `latest` or `v1.2.3`. Tags can change; use the returned `id` to
   * identify an image record. The corresponding filter and grouping key is `image_tag`.
   */
  "imageTags"?: Array<string>;
  /**
   * List of build times associated with the Container Image.
   * The list contains more than 1 entry for multi-architecture images.
   */
  "imagesBuiltAt"?: Array<string>;
  /**
   * Name of the Container Image.
   */
  "name"?: string;
  /**
   * List of Operating System architectures supported by the Container Image.
   */
  "osArchitectures"?: Array<string>;
  /**
   * List of Operating System names supported by the Container Image.
   */
  "osNames"?: Array<string>;
  /**
   * List of Operating System versions supported by the Container Image.
   */
  "osVersions"?: Array<string>;
  /**
   * Time the image was pushed to the container registry.
   */
  "publishedAt"?: string;
  /**
   * Registry where the image is stored. Use the `image_registry` tag key for filtering and grouping.
   */
  "registry"?: string;
  /**
   * Digest of the compressed image manifest. Use the `repo_digest` tag key to filter by this value.
   */
  "repoDigest"?: string;
  /**
   * Repository where the image is stored. Use the `image_repository` tag key for filtering and grouping.
   */
  "repository"?: string;
  /**
   * Short version of the Container Image name.
   */
  "shortImage"?: string;
  /**
   * Reported sizes in bytes of platform-specific images, with multiple values possible for multi-architecture images.
   * Use `image_flavors` for available platform associations; use `size` as the sort key.
   */
  "sizes"?: Array<number>;
  /**
   * Collection sources, such as `live_containers`, `image_check`, `aws_ecr`, or `agentless_scanner`.
   */
  "sources"?: Array<string>;
  /**
   * Image tags in `key:value` form, such as `image_registry:docker.io` or `status:running`.
   * Use tag keys in `group_by`. Tags used in `filter[tags]` must satisfy its syntax restrictions.
   */
  "tags"?: Array<string>;
  /**
   * Vulnerability counts by severity, when available. An absent `vulnerability_count` does not mean
   * the image has no vulnerabilities.
   */
  "vulnerabilityCount"?: ContainerImageVulnerabilities;
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
    containerCount: {
      baseName: "container_count",
      type: "number",
      format: "int64",
    },
    imageFlavors: {
      baseName: "image_flavors",
      type: "Array<ContainerImageFlavor>",
    },
    imageTags: {
      baseName: "image_tags",
      type: "Array<string>",
    },
    imagesBuiltAt: {
      baseName: "images_built_at",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    osArchitectures: {
      baseName: "os_architectures",
      type: "Array<string>",
    },
    osNames: {
      baseName: "os_names",
      type: "Array<string>",
    },
    osVersions: {
      baseName: "os_versions",
      type: "Array<string>",
    },
    publishedAt: {
      baseName: "published_at",
      type: "string",
    },
    registry: {
      baseName: "registry",
      type: "string",
    },
    repoDigest: {
      baseName: "repo_digest",
      type: "string",
    },
    repository: {
      baseName: "repository",
      type: "string",
    },
    shortImage: {
      baseName: "short_image",
      type: "string",
    },
    sizes: {
      baseName: "sizes",
      type: "Array<number>",
      format: "int64",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    vulnerabilityCount: {
      baseName: "vulnerability_count",
      type: "ContainerImageVulnerabilities",
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
    return ContainerImageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
